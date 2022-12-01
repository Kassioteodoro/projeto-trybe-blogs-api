const jwtFunctions = require('../auth/jwtFunctions');

module.exports = (req, res, next) => {
  const token = req.header('authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const payload = jwtFunctions.validateToken(token);
  if (payload.error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.user = payload.data;
  return next();
};