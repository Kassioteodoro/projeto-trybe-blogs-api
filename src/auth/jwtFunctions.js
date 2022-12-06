require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createNewToken = (userInfoWithoutPassword) => {
  const token = jwt.sign({ data: userInfoWithoutPassword }, secret, jwtConfig);
  console.log(token);
  return token;
};

// createNewToken({
  // id: 13,
  // displayName: 'Brett Wiltshire',
  // email: 'brett@email.com',
  // image:
    // 'http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png',
// });

const validateToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    console.log('deu acerto oo!!!', payload);
    return payload;
  } catch (e) {
    console.log('erro aqui', e.message);
    return { error: true, message: e.message };
  }
};

// validateToken(
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxMywiZGlzcGxheU5hbWUiOiJCcmV0dCBXaWx0c2hpcmUiLCJlbWFpbCI6ImJyZXR0QGVtYWlsLmNvbSIsImltYWdlIjoiaHR0cDovLzQuYnAuYmxvZ3Nwb3QuY29tL19ZQTUwYWRRLTd2US9TMWdmUl82dWZwSS9BQUFBQUFBQUFBay8xRXJKR2dSV1pEZy9TNDUvYnJldHQucG5nIn0sImlhdCI6MTY3MDMzMzU0NiwiZXhwIjoxNjcwOTM4MzQ2fQ.tOwYyZ5zQQpCAMpY3uU3plKTVOnWXBG8GByU63hqzO8',
  // );

module.exports = {
  createNewToken,
  validateToken,
};