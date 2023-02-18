const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Course = sequelize.define("courses", {
  courseID:Sequelize.INTEGER,
  studentNumber: Sequelize.NUMBER,
  courseName: Sequelize.STRING,
  courseType: Sequelize.STRING,
  coursePrice: Sequelize.STRING,
  courseReleaseDate: Sequelize.DATE,
  isEnrolled: Sequelize.BOOLEAN,
  description: Sequelize.STRING
});

const Instructor = sequelize.define("instructors", {
  instructorID:Sequelize.INTEGER,
  firstName:Sequelize.STRING,
  lastName:Sequelize.STRING,
  password:Sequelize.STRING,
  email:Sequelize.STRING
});

const Module = sequelize.define("modules", {
  moduleID: Sequelize.NUMBER,
  moduleName: Sequelize.STRING,
  moduleUrl: Sequelize.STRING,
  excersices: Sequelize.NUMBER,
  description: Sequelize.STRING
});

const Lecture = sequelize.define("lectures", {
  lectureID: Sequelize.NUMBER,
  lactureName: Sequelize.STRING,
  lactureUrl: Sequelize.STRING,
  description: Sequelize.STRING
});

const User = sequelize.define("users", {
  userID: Sequelize.NUMBER,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
});

const Payment = sequelize.define("payments", {
  paymentID: Sequelize.NUMBER,
  city: Sequelize.STRING,
  postalCode: Sequelize.STRING,
  country: Sequelize.STRING,
  state: Sequelize.STRING,
  paymentType: Sequelize.ENUM("fee", "payment"),
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});

const Enrollment = sequelize.define("enrollemts", {
  enrollmentID: Sequelize.NUMBER,
  courseID: Sequelize.NUMBER,
  userID: Sequelize.NUMBER
});


//model association 
User.hasMany(Course)
Course.belongsTo(User)

User.hasMany(Payment)
Payment.belongsTo(User)

Course.hasMany(Module)
Module.belongsTo(Course)

Instructor.hasMany(Module)
Module.belongsTo(Instructor)

Instructor.hasMany(Course)
Course.belongsTo(Instructor)

User.hasMany(Payment)
Payment.belongsTo(User)

Instructor.hasMany(Payment)
Payment.belongsTo(Payment)

User.hasMany(Enrollment)


module.exports = {
  db: sequelize,
  Instructor, Course, Module, User, Payment, Enrollment
};