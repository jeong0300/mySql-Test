"use strict";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.STRING(45),
        primaryKey: true,
      },
      pw: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      tableName: "jwtuser",
      timestamps: false,
    }
  );
};
