const express = require('express');
const { createUser } = require('../../controllers/userController');
const validateEmail = require('../../utils/validateEmail');
const validateUser = require('../../utils/validateUser');
const validateUserExist = require('../../utils/validateUserExist');

const userRouter = express.Router();

userRouter.post('/', validateUser, validateEmail, validateUserExist, createUser);

module.exports = userRouter;