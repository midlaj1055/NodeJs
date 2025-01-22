const mysql = require('mysql2');
require('dotenv').config(); // This line loads environment variables from the .env file

const db = mysql.createConnection({
  host: process.env.DB_HOST, // Use environment variables
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
  console.log('Connected to the database.');
});

module.exports = db;
