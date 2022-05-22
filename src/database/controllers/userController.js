// const jwt = require('jsonwebtoken');
const { User } = require('../models');
const generateJWT = require('../utils/generateJWT');

const validateBody = async (req, res) => {
  const { email, password } = req.body;
  const userLogin = await User.findOne({ where: { email } });
  const user = { email, password };
  const token = generateJWT(user);

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!userLogin) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json({ token });
};

module.exports = {
  validateBody,
};
