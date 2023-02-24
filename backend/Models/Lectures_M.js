const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Lectures = sequelize.define("lectures", {
  lectureID: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  id:{
    type:DataTypes.INTEGER,
    allowNull: false,
  },
  lectureName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lectureUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lectureDuration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = {
  Lectures,
};
