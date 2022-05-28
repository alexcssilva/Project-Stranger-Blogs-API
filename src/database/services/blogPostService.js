const { BlogPost, Category, User } = require('../models');

const getInfoPost = async () => {
    const blogPost = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
        required: false,
        attributes: { exclude: ['password'] },
      },
    {
      model: Category,
      as: 'categories',
    }],
    });
  
    return blogPost;
};

module.exports = {
  getInfoPost,
};
