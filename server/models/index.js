const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Instructor = sequelize.define("instructors", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
});

const Course = sequelize.define("courses", {
  name: Sequelize.STRING,
  type: Sequelize.FLOAT,
  number: Sequelize.FLOAT,
  imageUrl: Sequelize.STRING
});

const CoursesDetail = sequelize.define("course_details", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  imageUrl: Sequelize.STRING
});

const User = sequelize.define("users", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
});

const Payment = sequelize.define("payments", {
  amount: Sequelize.FLOAT,
  method: Sequelize.STRING,
  date: Sequelize.DATE
});


//model association 
User.hasMany(Course);
Course.belongsTo(User)

Payment.hasMany(Course)
Payment.belongsTo(User)

module.exports = {
  db: sequelize,
  Instructor, Course, User, Payment
};