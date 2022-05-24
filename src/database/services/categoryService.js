const { Category } = require('../models');

const categoryName = async (name) => {
  const user = await Category.findOne({ where: { name } });

  return user;
};

const newCategory = async (name) => {
  const user = await Category.create({ name });
  return {
    id: user.id,
    name,
  };
};

module.exports = {
  categoryName,
  newCategory,
};