import { Router } from 'express';
import * as controllers from './controllers/index'

const routes = new Router();

routes.get('/', controllers.indexCtrl);
routes.get('/products', controllers.productsCtrl);

export default routes;