import { anyObject } from '../@types';

/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

export const appConfig: anyObject = {
  mongoUri: process.env.DB_CONNECTION,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRATION,
};
