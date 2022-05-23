const { newUser } = require('../services/userService');
const generateJWT = require('../utils/generateJWT');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = { email };
  const token = generateJWT(user);

  if (user) {
  await newUser({ displayName, email, password, image });
  return res.status(201).json({ token });
  }
};

module.exports = {
  createUser,
};
