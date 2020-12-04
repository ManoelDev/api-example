import { Router } from 'express';
import userRoutes from './UsersRoutes';
import sessionRoutes from './SessionRoutes';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.use(`${prefixRoutes}/users`, userRoutes);
routes.use(`${prefixRoutes}/sessions`, sessionRoutes);

export default routes;
