const { loginUser } = require('../services/loginService');
const generateJWT = require('../utils/generateJWT');

const login = async (req, res) => {
  const { email } = req.body;
  const userLogin = await loginUser(email);
  const token = generateJWT(email);

  if (!userLogin) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
