require('dotenv').config();
const jwt = require('jsonwebtoken');
// const generateJWT = require('../utils/generateJWT');

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
  next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;