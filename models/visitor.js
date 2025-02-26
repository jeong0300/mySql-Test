"use strict";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING(450),
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );
};
