const { Sequelize } = require("sequelize");
const path = require("path");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.dataBase,
  process.env.userName,
  process.env.Password,
  {
    host: process.env.host,
    dialect: 'sqlite',
    storage: path.join(__dirname, "Elearning_db.sqlite"),
    logging:false
  }
);

module.exports = {
  sequelize,
};
