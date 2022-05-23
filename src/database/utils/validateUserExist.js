const { userEmail } = require('../services/userService');

const validateUserExist = async (req, res, next) => {
const { email } = req.body;

const user = userEmail(email);

if (!user) {
  return res.status(409).json({ message: 'User already registered' });
}

 next();
};

module.exports = validateUserExist;