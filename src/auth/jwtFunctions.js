require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createNewToken = (userInfoWithoutPassword) => {
  const token = jwt.sign({ data: { userInfoWithoutPassword } }, secret, jwtConfig);
  return token;
};

module.exports = {
  createNewToken,
};