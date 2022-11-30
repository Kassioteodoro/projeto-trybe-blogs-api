'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'users'
  });

  table.associate = (models) => {
    table.hasMany(models.BlogPost,
      { foreignKey: 'user_id', as: 'blogPosts' })
  }

  return table;
};