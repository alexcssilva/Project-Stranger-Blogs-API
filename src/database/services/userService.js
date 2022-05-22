const { User } = require('../models');

const loginUser = async (email) => {
  const newUser = await User.loginUser({ where: { email } });

  return newUser;
};

module.exports = {
  loginUser,
};