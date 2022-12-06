const Sequelize = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const postNewBlogPost = async (userId, title, content, categoryIds) => {
  const t = await sequelize.transaction();
  try {
    const result = BlogPost.create(
      { title, content, userId },
      { transaction: t },
    );
    const { dataValues, null: idPost } = result;
    await categoryIds.forEach(
      (idCategory) => PostCategory.create({ idPost, idCategory }, { transaction: t }),
);

    // console.log('estou aquiii !!!!!!', result);

    return dataValues;
  } catch (e) {
    return { error: true, message: e.message };
  }
};

const getAll = async () => {
    const result = await BlogPost.findAll({ include: [
        { model: Category, as: 'Category' },
        { model: User, as: 'user' },
      ],
    });
      const postsWithoutPassword = result.map((postMap) => {
        const { 
          user: { 
            dataValues: { password, ...userWithoutPassword } },
            Category: categories, ...data } = postMap.dataValues;
        return { ...data, user: userWithoutPassword, categories };
      });

    // console.log('estou aquiiii !!!!!!!!!!!!!!', postsWithoutPassword);
    // console.log('estou aquiiii 2222222 !!!!!!!!!!!!!!', result);
    return postsWithoutPassword;
};

// getAll();

const getById = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [
      { model: Category, as: 'Category' },
      { model: User, as: 'user' },
    ],
  });
  const { 
    dataValues: { 
      user: { 
        dataValues: { password, ...userWithoutPassword } },
        Category: categorie,
        user_id,
      ...data } } = result;
      const categories = categorie.map(({ id: idC, name }) => ({ id: idC, name }));
  console.log('by iud', { ...data, user: userWithoutPassword, categories });
  return { ...data, user: userWithoutPassword, categories };
};
// getById(1);

const updById = async (id, title, content) => {
    const [result] = await BlogPost.update(
      { title, content },
      { where: { id } },
    );
    // console.log('estou aquiii !!!!!!', result);
    return result;
};

// updById(
  // 1,
  // 'Latest updates, t 1st',
  // 'The whole text for the blog post goes here in this key',
// );

module.exports = {
  postNewBlogPost,
  getAll,
  getById,
  updById,
};