// const { categoryName } = require('../services/categoryService');

const validateCategory = async (req, res, next) => {
  const { name } = req.body;
  // const category = await categoryName(name);

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

 next();
};

module.exports = validateCategory;