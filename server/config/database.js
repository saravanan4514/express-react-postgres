import { Pool } from 'pg';

const pool = new Pool({
  connectionString: "postgres://postgres:postgres@localhost:5432/village"
});

pool.on('connect', () => {
  console.log('connected to database successfull');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
