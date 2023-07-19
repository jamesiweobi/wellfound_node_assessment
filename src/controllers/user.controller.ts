import { RequestHandler } from 'express';
import { UserService } from '../services/user.service';
import { sendResponse } from '../utils/responder';

const userService = new UserService();

export class UserController {
  getSingleRandomUser: RequestHandler = async (req, res) => {
    const randomUser = await userService.getRandomUserFromExternalApi();
    return sendResponse({
      res,
      statusCode: 200,
      data: { randomUser },
      message: 'Signup successful.',
    });
  };

  getLoggedInUserProfile: RequestHandler = async (req, res) => {
    const id = req.user._id;
    const user = await userService.getLoggedInUser(id);
    return sendResponse({
      res,
      statusCode: 200,
      data: { user },
      message: 'Signup successful.',
    });
  };
}
