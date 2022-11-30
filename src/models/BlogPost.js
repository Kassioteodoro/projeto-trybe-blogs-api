'use strict';
module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'blog_posts',
  });

  table.associate = (models) => {
    table.belongsTo(models.User, 
      { foreignKey: "user_id", as: "user" });
  };

  return table;
};