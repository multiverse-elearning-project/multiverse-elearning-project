const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const AuthChecker = sequelize.define("authChecker", {
  authID: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  token: { type: DataTypes.STRING, allowNull: false }
});



module.exports = {
  AuthChecker,
};
