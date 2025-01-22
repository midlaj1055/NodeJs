const mysql = require('mysql2');
require('dotenv').config(); // Loads environment variables from .env file

// Use the MYSQL_URL provided by Railway
const db = mysql.createConnection({
  uri: process.env.MYSQL_URL,
  ssl: { rejectUnauthorized: false }, // Enable SSL for secure connection
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.message);
    process.exit(1); // Exit if there's an error
  }
  console.log('Connected to the Railway MySQL database.');
});

module.exports = db;
