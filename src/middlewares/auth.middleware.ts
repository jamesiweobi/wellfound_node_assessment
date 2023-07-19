import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../utils/errorHandlers';
import jwt from 'jsonwebtoken';
import { IUserObject } from '../models/user.model';
import { UserService } from '../services/user.service';

const userService = new UserService();

export const authUserMiddleware = async (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  const token = req.headers?.authorization?.split(' ')[1];
  if (!token) {
    throw new UnauthorizedError('Access denied. You need to be logged in.');
  }
  try {
    const decoded = jwt.verify(token, 'CONFIG.JWT_SECRET_KEY!') as IUserObject;
    const user = await userService.getUserById(decoded._id);
    req.user = user as IUserObject;
    next();
  } catch (error) {
    _.status(401).json({
      statusCode: 401,
      message: 'Invalid token.',
    });
  }
};
