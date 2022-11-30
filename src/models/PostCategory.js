'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('PostCategory', 
  {},
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  table.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'categories',
        through: table,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
    models.Category.belongsToMany(models.BlogPost, {
      as: "blogPosts",
      through: table,
      foreignKey: "categoryId",
      otherKey: "postId",
    });
  };
  return table;
};