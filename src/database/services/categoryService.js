const { Category } = require('../models');

const categoryName = async (name) => {
  const category = await Category.findOne({ where: { name } });

  return category;
};

const newCategory = async (name) => {
  const category = await Category.create({ name });
  return {
    id: category.id,
    name,
  };
};

const getCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  categoryName,
  newCategory,
  getCategories,
};