const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Enrollments = sequelize.define("enrollments", {
  enrollmentID: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  isEnrolled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});



module.exports = {
    Enrollments,
};