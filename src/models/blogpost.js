'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('blogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'blog_posts',
  });
  return table;
};