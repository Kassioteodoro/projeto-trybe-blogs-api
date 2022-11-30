'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
  });

  table.associate = (models) => {
    table.hasMany(models.blogPost,
      { foreignKey: 'user_id', as: 'blogPosts'})
  }

  return table;
};