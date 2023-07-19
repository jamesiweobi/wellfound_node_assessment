import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import tryCatchWrapper from '../utils/tryCatchWrapper';

const router = Router();
const authController = new AuthController();

router.post('/register', tryCatchWrapper(authController.signup));
router.post('/login', tryCatchWrapper(authController.login));

export { router as authRouter };
