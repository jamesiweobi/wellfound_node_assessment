import { IUser } from '../models/user.model';
import joi from 'joi';

export function userignupPayloadValidator(value: IUser) {
  return joi
    .object({
      email: joi.string().email().required(),
      password: joi
        .string()
        .min(8)
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        )
        .error(
          new Error(
            'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@ $ ! % * ? &)',
          ),
        ),
      firstName: joi.string().optional(),
      username: joi.string().optional(),
    })
    .validate(value);
}

export function userLoginPayloadValidator(value: IUser) {
  return joi
    .object({
      email: joi.string().email().required(),
      password: joi.string().required(),
    })
    .validate(value);
}
