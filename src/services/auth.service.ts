import { IUser, IUserObject } from '../models/user.model';
import UserRepo from '../repositories/user.repo';
import { DuplicateResourceError, UserError } from '../utils/errorHandlers';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { formatUserResponseData } from '../utils/responder';
import { appConfig } from '../config/app.config';

const userRepo = new UserRepo();

export class AuthService {
  async signup({ email, password, firstName, username }: IUserObject) {
    const accountExists = await userRepo.findOne({
      email: email,
    });
    if (accountExists) {
      throw new DuplicateResourceError('A User with this email already exists');
    }
    const user = await userRepo.insert({
      email,
      firstName,
      username,
      password: crypto.createHash('md5').update(password).digest('hex'),
    });

    return {
      user: formatUserResponseData(user),
      token: this._generateJwt(user),
    };
  }

  async login({ email, password }: IUserObject) {
    const user = await userRepo.findOne({
      email,
      password: crypto.createHash('md5').update(password).digest('hex'),
    });
    if (!user) {
      throw new UserError('Invalid email or password');
    }
    return {
      user: formatUserResponseData(user),
      token: this._generateJwt(user),
    };
  }

  private _generateJwt(payload: IUser) {
    return jwt.sign({ ...payload }, appConfig.jwtSecret, {
      expiresIn: appConfig.jwtExpiration,
    });
  }
}
