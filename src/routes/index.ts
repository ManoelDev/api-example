import { Router } from 'express';
import userRoutes from '@modules/users/routes/UsersRoutes';
import sessionRoutes from '@modules/users/routes/SessionRoutes';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.use(`${prefixRoutes}`, userRoutes);
routes.use(`${prefixRoutes}`, sessionRoutes);

export default routes;
