import axios, { AxiosResponse } from 'axios';
import { NotFoundError } from '../utils/errorHandlers';
import UserRepo from '../repositories/user.repo';
import { formatUserResponseData } from '../utils/responder';

const User = new UserRepo();

export class UserService {
  async getRandomUserFromExternalApi() {
    const randomUser = await this._callRandomUserApi();
    return randomUser;
  }

  async getLoggedInUser(id: string) {
    const user = await User.findById(id)
    return formatUserResponseData(user!);
  }

  async getUserById(id: string) {
    return await User.findById(id)
  }

  private async _callRandomUserApi() {
    try {
      const randomUserResponse: AxiosResponse = await axios.get(
        'https://randomuser.me/api/',
      );
      return randomUserResponse.data;
    } catch (e) {
      throw new NotFoundError(
        'Something went wrong while trying to get random user',
      );
    }
  }
}
