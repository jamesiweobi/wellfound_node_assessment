// src/index.ts
import express from 'express';
import { connectDB } from './app_startup/dtabase.connection';
import { NotFoundErrorHandler, ServerErrorHandler } from './utils/errorHandlers';
import { logger } from './utils/logger';
import { loadMiddleware } from './app_startup/middleWare.loader';
import { loadRoutes } from './app_startup/routes.loader';

const app = express();
const PORT = 3000; 

app.use(express.json());
connectDB();
loadRoutes(app)
loadMiddleware(app)


app.use(NotFoundErrorHandler);
app.use(ServerErrorHandler);


app.listen(PORT, () => {
  logger.info(`Server running on Port:${PORT}`);
});

process.on("uncaughtException", function (err) {
  logger.error(err);
  logger.error(err.stack);
});