import { Application } from 'express';
import { authRouter } from '../routers/auth.router';
import { userRouter } from '../routers/user.router';

export const loadRoutes = (app: Application) => {
  app.get('/', (req, res) => {
    res.send('Hi there!');
  });

  app.get('/test', (req, res) => {
    res.send(req.ip);
  });

  app.use('/api/users/', userRouter);
  app.use('/api/auth/', authRouter);
};
