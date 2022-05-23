const { newUser, getAllUsers } = require('../services/userService');
const generateJWT = require('../utils/generateJWT');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = generateJWT(email);

  if (email) {
  await newUser({ displayName, email, password, image });
  return res.status(201).json({ token });
  }
};

const getUser = async (req, res) => {
  const users = await getAllUsers();

  return res.status(200).json(users);
};

module.exports = {
  createUser,
  getUser,
};
