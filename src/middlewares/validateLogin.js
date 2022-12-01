const isBodyValid = (email, password) => email && password;

const services = require('../services');

const { userServices } = services;

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await userServices.getByEmail(email);

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return next();
};