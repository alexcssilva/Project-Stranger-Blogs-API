const { getCategories } = require('../services/categoryService');

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  const getArrayIds = (await getCategories()).map((ids) => ids.id);

  const isNotEmpty = categoryIds.every((category) => getArrayIds.includes(category));

  if (!isNotEmpty) {
    return res.status(400)
      .json({ message: '"categoryIds" not found' });
  }

next();
};

module.exports = validateCategoryId;
