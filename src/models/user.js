'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('user', {
    id: {type: DataTypes.INTEGER},
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
  });
  return table;
};