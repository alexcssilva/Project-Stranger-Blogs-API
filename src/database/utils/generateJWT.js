require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
 
const jwtConfig = {
  expiresIn: '8h',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ payload }, JWT_SECRET, jwtConfig);

  return token;
};

module.exports = generateJWT;