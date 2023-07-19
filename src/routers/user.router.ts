import { Router } from 'express';
import tryCatchWrapper from '../utils/tryCatchWrapper';
import { UserController } from '../controllers/user.controller';
import { authUserMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const userController = new UserController();

router.get(
  '/profile',
  [authUserMiddleware],
  tryCatchWrapper(userController.getLoggedInUserProfile),
);

router.get(
  '/random',
  [authUserMiddleware],
  tryCatchWrapper(userController.getSingleRandomUser),
);

export { router as userRouter };
