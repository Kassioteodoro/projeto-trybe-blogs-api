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
        foreignKey: 'post_id',
        otherKey: 'category_id',
      });
    models.Category.belongsToMany(models.BlogPost, {
      as: "blogPosts",
      through: table,
      foreignKey: "category_id",
      otherKey: "post_id",
    });
  };
  return table;
};