const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Users = sequelize.define("users", {
  userID: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("user","instructor", "admin"),
    defaultValue: "user",
    allowNull: false,
  },
  avatarImage: {
    type: DataTypes.STRING,
  },
  refreshToken: {
    type: DataTypes.STRING,
  },
});

module.exports = {
  Users,
};
