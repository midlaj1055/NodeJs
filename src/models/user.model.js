const db = require('../config/db.config');

const createUser = (name, email, callback) => {
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], callback);
};

module.exports = { createUser };
