import db from '../../config/database';

let createFlat;

createFlat = async (req, res) => {
  console.log(req.body);
  const {name, location, village_name, village_id} = req.body;
  const result = await db.query(
    "INSERT INTO flats (name, location, village_name, village_id) VALUES ($1, $2, $3, $4) RETURNING flat_id",
    [name, location, village_name, village_id]
  );

  console.log(result.rows);
  res.status(201).send({
    'message': 'Flat succesfully created'
  });
}

export default createFlat;
