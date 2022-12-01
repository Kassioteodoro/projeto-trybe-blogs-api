const { Category } = require('../models');

const getAll = async () => {
  const result = await Category.findAll();
  const categories = result.map((category) => category.dataValues);
  console.log('aqui', categories);
  return categories;
};

// getAll();

const postNewCategory = async (name) => {
  const category = await Category.create({ name });
  // console.log({ id: category.null, name: category.dataValues.name });
  return { id: category.null, name: category.dataValues.name };
};

// postNewCategory('manga');

module.exports = {
  postNewCategory,
  getAll,
};