const express = require('express');
const categoryController = require('../../controllers/categoryController');
const validateToken = require('../../middleware/validateToken');
const validateCategory = require('../../utils/validateCategory');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken, validateCategory, categoryController.createCategory);

categoryRouter.get('/', validateToken, categoryController.getAllCategories);

module.exports = categoryRouter;