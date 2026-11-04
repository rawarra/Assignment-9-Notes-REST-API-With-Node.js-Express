const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const userValidator = require('../middlewares/userValidations');
const userlogin = require('../security/userauth.security');

// get all users
router.get('/', userController.getAllUsers);

// register a new user
router.post('/', userValidator, userController.registerUser);

// user login
router.post('/login', userlogin, userController.loginUser);

// get a user by id
router.get('/:id', userController.getUserById);

// delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;