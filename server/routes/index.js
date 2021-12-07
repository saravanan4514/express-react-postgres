'use strict';

import { Router as routerFactory } from 'express';
import getUsers from './users/getUsers'

let router = routerFactory(),
    routes;

router.route('/api/users/')
  .get(getUsers);

routes = (app) => {
  app.use(router);
};

export default routes;
