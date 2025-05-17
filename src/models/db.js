const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool(
    {
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
    }
);

const initDB = async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('✅ Connected to PostgreSQL database.');

    const tableCheck = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'todos'
      );
    `);

    const tableExists = tableCheck.rows[0].exists;

    if (!tableExists) {
      console.log('ℹ️  Table "todos" does not exist. Creating...');
      await pool.query(`
        CREATE TABLE todos (
          id SERIAL PRIMARY KEY,
          task TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log('✅ Table "todos" created.');
    } else {
      console.log('✅ Table "todos" already exists.');
    }
  } catch (err) {
    console.error('❌ Error connecting to the database or initializing schema:', err);
    process.exit(1);
  }
};

module.exports = {
  pool,
  initDB
};
