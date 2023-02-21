const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Courses = sequelize.define("courses", {
  courseID: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  courseName: { type: DataTypes.STRING, allowNull: false },
  courseType: { type: DataTypes.STRING, allowNull: true },
  coursePrice: { type: DataTypes.DOUBLE, allowNull: false },
  courseReleaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = {
  Courses,
};
