const { Sequelize, DataTypes, Model } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'mysql',
    storage: path.join(__dirname, 'db.mysql'),
    logging: false
});

module.exports = {sequelize}