import db from '../../config/database';

let createUser; 

createUser = async (req, res) => {
  const {flatRows} = await db.query(
    "INSERT INTO flats (name, location, village_name, village_id) VALUES ($1, $2, $3, $4)",
    ["Sprintfield", "Chennai", "navins", "navinsspringfield"]
  )
  const {rows} = await db.query(
    "INSERT INTO users (name, role, email, flat_id) VALUES ($1, $2, $3, $4)",
    ["sara", "1", "test@test.com", "1"]
  )

  res.status(201).send({
    'message': 'User succesfully created'
  });
}

export default createUser;
