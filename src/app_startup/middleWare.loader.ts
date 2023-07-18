import express, { Application } from "express";
import { logger } from "../utils/logger";

export const loadMiddleware = (app: Application) => {
  app.use(express.json());
  app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    const logMessage = `${new Date().toISOString()} - ${req.method} - ${req.url} - ${req.ip}`;
    logger.info(logMessage);
    next();
  });
};
