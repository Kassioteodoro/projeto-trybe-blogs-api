require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createNewToken = (userInfoWithoutPassword) => {
  const token = jwt.sign({ data: { userInfoWithoutPassword } }, secret, jwtConfig);
  // console.log(token);
  return token;
};

// createNewToken('kassio@gemail.com');

const validateToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    // console.log(1, payload);
    return payload;
  } catch (e) {
    // console.log('erro aqui', e.message);
    return { error: true, message: e.message };
  }
};

// validateToken(
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJbmZvV2l0aG91dFBhc3N3b3JkIjoia2Fzc2lvQGdlbWFpbC5jb20ifSwiaWF0IjoxNjY5OTE5MDI2LCJleHAiOjE2NzA1MjM4MjZ9.dcA2MK5E1egSIVofFkthDtcRusepl4muf_wjmPHMyh0',
// );

module.exports = {
  createNewToken,
  validateToken,
};