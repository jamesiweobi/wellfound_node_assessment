import { ResponseParams } from '../@types';
import { IUserObject } from '../models/user.model';

export const sendResponse = ({
  res,
  data,
  message,
  statusCode = 200,
}: ResponseParams) => {
  res.status(statusCode).json({
    success: statusCode < 400,
    message,
    data,
  });
};

export function formatUserResponseData(user: IUserObject) {
  return {
    email: user.email,
    firstName: user.firstName,
    username: user.username,
  };
}
