const { Sequelize, DataTypes, Model } = require('sequelize');
require("dotenv").config(); //Allows environment Variables to be set on Process.env
const express = require("express");
const mysql = require('mysql2');
const router = express.Router();
const courses = require('./routes/courses')
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'mysql',
    storage: path.join(__dirname, 'db.mysql'),
    logging: false
});

//Create database
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'yes',
    database : 'multi_elearn'
});

db.connect((err) => {
    if(!err) {
        console.log("Databse connected")
    } 
    else console.log(err);
})

module.exports = {
    sequelize, db
};

