const { loginUser } = require('../services/loginService');

const validateBody = async (req, res, next) => {
  const { email, password } = req.body;
  const checkEmail = /\S+@\S+.\S+/;
  const userLogin = await loginUser(email);

  if (!email && !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!userLogin) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  if (!checkEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

module.exports = validateBody;