const express = require('express');
const postController = require('../../controllers/postController');
const validateCategoryId = require('../../middleware/validateCategoryId');
const validateToken = require('../../middleware/validateToken');
const validatePost = require('../../utils/validatePost');

const postRouter = express.Router();

postRouter.post('/', 
  validateToken, 
  validatePost,
  validateCategoryId,
  postController.createBlogPost);

postRouter.get('/', validateToken, postController.getInfoBlogPost);

module.exports = postRouter;