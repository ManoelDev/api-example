import { Router } from 'express';
import userRoutes from '@modules/users/routes/UsersRoutes';
import sessionRoutes from '@modules/users/routes/SessionRoutes';
import categoryRouytes from '@modules/Categories/routes/CreateCategoryRoutes';

const routes = Router();
const prefixV1 = '/v1';

routes.use(`${prefixV1}`, userRoutes);
routes.use(`${prefixV1}`, sessionRoutes);
routes.use(`${prefixV1}`, categoryRouytes);

export default routes;
