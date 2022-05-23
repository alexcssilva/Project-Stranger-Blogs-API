const { User } = require('../models');

const userEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const newUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });

  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

module.exports = {
  userEmail,
  newUser,
  getAllUsers,
};