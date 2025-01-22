const UserModel = require('../models/user.model');

const createUser = (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);

  UserModel.createUser(name, email, (err, result) => {
    
    if (err) {
      res.status(500).json({ error: 'Failed to create user' });
    } else {
      res.status(201).json({ message: 'User created successfully', userId: result.insertId });
    }
  });
};

module.exports = { createUser };
