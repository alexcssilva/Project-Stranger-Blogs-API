const { userEmail } = require('../services/userService');

const validateUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const emailUser = await userEmail(email);

  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
  if (emailUser) {
    return res.status(409)
      .json({ message: 'User already registered' });
  }

 next();
};

module.exports = validateUser;