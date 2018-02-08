import { Router } from 'express';
import * as UserController from '../controllers/User-controller';

const routes = new Router();

routes.post('/user', UserController.createUser);
routes.get('/user', UserController.getUser);

export default routes;
