// src/index.ts
import express from 'express';
import { connectDB } from './app_startup';
import { NotFoundErrorHandler, ServerErrorHandler } from './utils/errorHandlers';
import { logger } from './utils/logger';
import { loadMiddleware } from './utils/middleWare.loader';

const app = express();
const PORT = 3000; 

app.use(express.json());
connectDB();
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