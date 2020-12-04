import { Router } from 'express';
import AuthController from '@modules/users/controllers/AuthController';

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post('/sessions', authController.create);

export default authRoutes;
