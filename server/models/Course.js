const {Sequelize} = require('sequelize')
const {sequelize} = require('../app.js')

const Sequelize = require('sequelize');

const sequelize = new Sequelize('multi_elearn', 'root', 'yes',{
  host: 'localhost',
  dialect: "mysql" // pick one of 'mysql','sqlite','postgres','mssql',
  // port: 3306
});

//Checking database connection status

sequelize.authenticate().complete(function (err) {
  if (err) {
     console.log('There is connection in ERROR');
  } else {
     console.log('Connection has been established successfully');
  }
 });

const Course = sequelize.define("courses", {
  studentNumber: Sequelize.NUMBER,
  courseName: Sequelize.STRING,
  courseType: Sequelize.STRING,
  coursePrice: Sequelize.STRING,
  courseReleaseDate: Sequelize.DATE,
  isEnrolled: Sequelize.BOOLEAN,
  description: Sequelize.STRING
});

module.exports = {
    sequelize: sequelize,
    Course: Course
   
};