const { newCategory } = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await newCategory(name);
  return res.status(201).json(category);
};

module.exports = {
  createCategory,
};