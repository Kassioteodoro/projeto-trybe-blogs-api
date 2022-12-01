const services = require('../services');

const { userServices } = services;

const postNewLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userServices.postNewLogin(email, password);
    return res.status(200).json({ token });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  postNewLogin,
};