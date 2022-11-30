'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'categories'
  });
  return table;
};