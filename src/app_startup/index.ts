import mongoose from 'mongoose';
import { config } from "process";
import { DatabaseError } from "../utils/errorHandlers";
import { logger } from '../utils/logger';


const { database_url } = config as any;

export const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/test")
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
