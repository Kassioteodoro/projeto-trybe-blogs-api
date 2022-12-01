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

const postNewUser = async (req, res) => {
  try {
    const { body } = req;
    const token = await userServices.postNewLogin(body);
    return res.status(201).json({ token });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await userServices.getAll();
    return res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAll,
  postNewLogin,
  postNewUser,
};