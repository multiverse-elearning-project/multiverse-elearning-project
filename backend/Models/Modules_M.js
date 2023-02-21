const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const CourseModules = sequelize.define("modules", {
  moduleID: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  moduleName: {
    type: DataTypes.STRING,
  },
  moduleUrl: {
    type: DataTypes.STRING,
  },
  excersices: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = {
  CourseModules,
};
