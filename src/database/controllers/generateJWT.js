const jwt = require('jsonwebtoken');

const secretPassword = 'suaSenhaSecreta';

const jwtConfig = {
  expiresIn: '8h',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ payload }, secretPassword, jwtConfig);

  return token;
};

module.exports = generateJWT;