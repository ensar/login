const express = require('express');
const { login, signup, getAllUsers } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signup);
userRouter.post('/login', login);

module.exports = userRouter;
