const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const ContactUS = sequelize.define("ContactUS", {
  msgID: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  ContactUS,
};
