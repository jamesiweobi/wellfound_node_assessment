import { RequestHandler } from 'express';
import { handleValidationError } from '../utils/errorHandlers';
import { sendResponse } from '../utils/responder';
import { userignupPayloadValidator, userLoginPayloadValidator } from '../validators/auth.validator';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export class AuthController {
  signup: RequestHandler = async (req, res) => {
    const { error, value: signupData } = userignupPayloadValidator(
      req.body,
    );
    if (error) return handleValidationError(error);

    const data = await authService.signup(signupData);
    return sendResponse({
      res,
      statusCode: 201,
      data: { data },
      message: 'Signup successful.',
    });
  };

  login: RequestHandler = async (req, res) => {
    const { error, value: loginData } = userLoginPayloadValidator(
      req.body,
    );
    if (error) return handleValidationError(error);
    const data = await authService.login(loginData);
    return sendResponse({
      res,
      statusCode: 200,
      data: { data },
      message: 'Sign in successful.',
    });
  };
}
