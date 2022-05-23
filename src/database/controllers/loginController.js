const { loginUser } = require('../services/loginService');
const generateJWT = require('../utils/generateJWT');

const login = async (req, res) => {
  const { email, password } = req.body;
  const userLogin = await loginUser(email);
  const user = { email, password };
  const token = generateJWT(user);

  if (!userLogin) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
