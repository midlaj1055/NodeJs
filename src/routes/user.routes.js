// routes/user.routes.js
const express = require('express');
const UserController = require('../controllers/user.controller'); // Ensure the path is correct

const router = express.Router();

// Define POST route to create a user
router.post('/users', UserController.createUser);

// Define GET route for /
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the User API!' });
});

module.exports = router;
