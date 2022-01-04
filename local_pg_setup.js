const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'village',
  password: 'postgres',
  port: 5432,
});

const execute = async (query) => {
  try {
    await client.query(query);  // sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  }
};

const usersTable = `
  CREATE TABLE IF NOT EXISTS "users" (
    "user_id" INT GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR(100) NOT NULL,
    "role" VARCHAR(15) NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "flat_id" INT,
    PRIMARY KEY("user_id"),
    CONSTRAINT fk_flat
      FOREIGN KEY(flat_id)
        REFERENCES flats(flat_id)
  );`;

const flatTable = `
  CREATE TABLE IF NOT EXISTS "flats" (
    "flat_id" INT GENERATED ALWAYS AS IDENTITY,
    "name" VARCHAR(100) NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "village_name" VARCHAR(100) NOT NULL,
    "village_id" VARCHAR(100) NOT NULL,
    PRIMARY KEY("flat_id")
  );`;

const dropUsers = `DROP TABLE IF EXISTS users`;
const dropFlats = `DROP TABLE IF EXISTS flats`;

const init_setup = async () => {
  try {
    await client.connect();
    await execute(dropFlats);
    await execute(dropUsers);
    await execute(flatTable);
    await execute(usersTable);
    await client.end();
  } catch (ex) {
    console.log(ex);
  }
}

init_setup()