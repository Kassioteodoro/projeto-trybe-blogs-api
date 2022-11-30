'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
  });
  return table;
};