import mongoose from 'mongoose';
import { DatabaseError } from "../utils/errorHandlers";
import { logger } from '../utils/logger';
import { appConfig } from '../config/app.config';

export const connectDB = () => {
  mongoose
    .connect(appConfig.mongoUri)
    .then(() => logger.info(`Connected to Database!!! `))
    .catch((e: Error) => {
      throw new DatabaseError(e.message);
    });
};

export const disconnectDB = () => {
  mongoose.connection
    .close()
    .then(() => logger.info(`Disconnected 💃`))
    .catch((e: Error) => {
      throw new DatabaseError(e.message);
    });
};
