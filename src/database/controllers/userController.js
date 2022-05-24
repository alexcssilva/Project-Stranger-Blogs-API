const { newUser, getAllUsers, getIdUser } = require('../services/userService');
const generateJWT = require('../utils/generateJWT');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = generateJWT(email);

  if (email) {
  await newUser({ displayName, email, password, image });
  return res.status(201).json({ token });
  }
};

const getAllUser = async (_req, res) => {
  const users = await getAllUsers();

  return res.status(200).json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await getIdUser(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUser,
  getUser,
};
