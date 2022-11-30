'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('postsCategorie', {
    post_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });
  return table;
};