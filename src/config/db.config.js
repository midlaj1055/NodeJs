const mysql = require('mysql2');
require('dotenv').config(); // This line loads environment variables from the .env file

const db = mysql.createConnection({
  uri: process.env.MYSQL_URL, // Use MYSQL_URL to connect
  ssl: { rejectUnauthorized: false }, // Enable SSL for secure connections
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
  console.log('Connected to the database.');
});

module.exports = db;
