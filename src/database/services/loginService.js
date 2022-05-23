const { User } = require('../models');

const loginUser = async (email) => {
  const newLogin = await User.findOne({ where: { email } });

  return newLogin;
};

module.exports = {
  loginUser,
};