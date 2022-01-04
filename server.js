'use strict';

import express from 'express';
import path from 'path';
import routes from './server/routes';

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/build/')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// Routes defined
routes(app);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));

// handle the error safely
process.on('uncaughtException', function (err) {
  // logger.error('Uncaught Error', {}, err, 'crit');
  console.log(err);
});

export default app;
