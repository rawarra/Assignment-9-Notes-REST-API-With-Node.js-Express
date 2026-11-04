// const user = require('../models/notes.model');
const userService = require('../services/user.service');

// read all users
function getAllUsers(req, res, next) {
  try {
    res.status(200).json({ message: 'Users found', users: userService.getAllUsers() });
  }catch (error) {
    next(error);
  }
}

// user login

function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = userService.loginUser(email, password);
    res.status(200).json({ message: 'User logged in successfully', user });
  } catch (error) {

    // user not found or invalid credentials
    if(!user) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      next(error);
    }
  }
}

// register a new user
function registerUser(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const newUser = userService.registerUser(name, email, password);
    res.status(201).json({ message: 'User registered successfully', newUser });
  } catch (error) {
    next(error);
  }
}

// get a user by id
function getUserById(req, res, next) {
  try {
    const user = userService.getUserById(req.params.id);
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: 'User found', user });
  } catch (error) {
    next(error);
  }
}

// delete a user
function deleteUser(req, res, next) {
  try {
    userService.deleteUser(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
}
module.exports = {
  getAllUsers,
  registerUser,
  getUserById,
  deleteUser,
  loginUser
};