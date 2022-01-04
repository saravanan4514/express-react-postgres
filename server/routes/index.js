'use strict';

import { Router as routerFactory } from 'express';
import getUsers from '../controllers/users/getUsers';
import createUser from '../controllers/users/createUser';
import createFlat from '../controllers/flats/createFlat';

let router = routerFactory(),
  routes;


// Flat routes
router.route('/api/flats/')
  .post(createFlat);

// Users routes
router.route('/api/users/')
  .get(getUsers);

router.route('/api/users/')
  .post(createUser);

routes = (app) => {
  app.use(router);
};

export default routes;
