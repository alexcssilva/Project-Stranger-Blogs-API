const { newCategory, getCategories } = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await newCategory(name);
  return res.status(201).json(category);
};

const getAllCategories = async (_req, res) => {
  const users = await getCategories();

  return res.status(200).json(users);
};

module.exports = {
  createCategory,
  getAllCategories,
};