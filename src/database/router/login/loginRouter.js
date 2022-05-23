const express = require('express');
const loginController = require('../../controllers/loginController');
const validateBody = require('../../utils/validateEmail');

const loginRouter = express.Router();

loginRouter.post('/', validateBody, loginController.login);

module.exports = loginRouter;