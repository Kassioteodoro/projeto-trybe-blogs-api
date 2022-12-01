const services = require('../services');

const { categoryServices } = services;

const postNewCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const category = await categoryServices.postNewCategory(name);
    return res.status(201).json(category);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await categoryServices.getAll();
    return res.status(200).json(categories);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAll,
  postNewCategory,
};