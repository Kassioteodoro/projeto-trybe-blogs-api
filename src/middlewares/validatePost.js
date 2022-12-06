const services = require('../services');

const isBodyValid = (title, content, categoryIds) => title && content && categoryIds;

const { categoryServices } = services;

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (isBodyValid(title, content, categoryIds)) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }

  const categories = await categoryServices.getAll();
    if (!categories.some((category) => category.id in categoryIds)) {
      return res.status(400).json({
        message: 'Some required fields are missing',
      });
    }

  return next();
};