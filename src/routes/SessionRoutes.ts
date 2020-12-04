import { Router } from 'express';
import AuthController from '@modules/users/controllers/AuthController';

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post('/', authController.create);

export default authRoutes;
