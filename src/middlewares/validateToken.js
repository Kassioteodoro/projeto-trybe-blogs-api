const jwtFunctions = require('../auth/jwtFunctions');

module.exports = (req, res, next) => {
  const { authorization } = req.header;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const payload = jwtFunctions.validateToken(authorization);
  if (payload.error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.user = payload.data;
  return next();
};