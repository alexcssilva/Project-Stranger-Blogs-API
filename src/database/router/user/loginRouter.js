const express = require('express');
const loginController = require('../../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', loginController.validateBody);

module.exports = loginRouter;