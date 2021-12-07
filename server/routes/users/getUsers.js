'use strict';

let getUsers;

getUsers = (req, res) => {
  res.status(200).send({'success': 'success', "failure": 'failure'});
};

export default getUsers;
