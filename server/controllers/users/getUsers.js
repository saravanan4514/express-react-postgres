'use strict';
import db from '../../config/database';

let getUsers;

getUsers = async (req, res) => {
  const response = await db.query('SELECT * FROM users');
  res.status(200).send(response.rows);
};

export default getUsers;
