'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('PostCategory', 
  {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  table.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'Category',
        through: table,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
    models.Category.belongsToMany(models.BlogPost, {
      as: "BlogPost",
      through: table,
      foreignKey: "categoryId",
      otherKey: "postId",
    });
  };
  return table;
};