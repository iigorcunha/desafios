// DEPENDENCIES
import { Router } from 'express';

// MIDDLEWARES
import authMiddleware from './app/middlewares/auth';

// CONTROLLERS
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users/:id', UserController.update);

export default routes;
