const { BlogPost, PostCategory } = require('../models');

const { userEmail } = require('./userService');

const newBlogPost = async (email, body) => {
  const { title, content, categoryIds } = body;

  const getId = await userEmail(email);
  const post = await BlogPost.create({ title, content, userId: getId.id });
  const categories = categoryIds
    .map(async (category) => PostCategory.create({ postId: post.id, categoryId: category }));

  Promise.all(categories);

  return post;
};

module.exports = {
  newBlogPost,
};
