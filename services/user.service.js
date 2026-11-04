const usersModel = require('../models/user.model');

// read all users
function getAllUsers() {
  return usersModel;
}

// user login
function loginUser(email, password) {
    const user = usersModel.find(user => user.email === email && user.password === password);
    if (!user) {
        const error = new Error('Invalid email or password');
        error.statusCode = 401;
        throw error;
    }
    return user;
}

// create a new user
function registerUser(name, email, password) {

    // Check if the email already exists
    const existingUser = usersModel.find(user => user.email === email);
    if (existingUser) {
        const error = new Error('Email already exists');
        error.statusCode = 400;
        throw error;
    }
    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    }
    usersModel.push(newUser);
    return newUser;
}

// get a user by id
function getUserById(id) {
    const user = usersModel.find(user => user.id === Number(id));   
    return user;
}

// delete a user
function deleteUser(id) {
    const index = usersModel.findIndex(user => user.id === Number(id));
    if (index !== -1) {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
    }
        
    usersModel.splice(index, 1);
}

module.exports = {
  getAllUsers,
  registerUser,
  getUserById,
  deleteUser,
  loginUser
}