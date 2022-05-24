const express = require('express');
const userController = require('../../controllers/userController');
const validateToken = require('../../middleware/validateToken');
const validateEmail = require('../../utils/validateEmail');
const validateUser = require('../../utils/validateUser');
const validateUserExist = require('../../utils/validateUserExist');

const userRouter = express.Router();

userRouter.post('/', validateUser, validateEmail, validateUserExist, userController.createUser);

userRouter.get('/', validateToken, userController.getAllUser);
userRouter.get('/:id', validateToken, userController.getUser);

module.exports = userRouter;