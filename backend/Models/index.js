const { Courses } = require("./Courses_M");
// const { Instructors } = require("./Instructors_M");
const { Lectures } = require("./Lectures_M");
const { CourseModules } = require("./Modules_M");
const { Users } = require("./Users_M");
const { Payments } = require("./Payment_M");
const { Enrollments } = require("./Enrollement_M");
const { ContactUS } = require("./ContactUS_M");

//model association
Users.hasMany(Courses, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Courses.belongsTo(Users);

Users.hasMany(Payments);
Payments.belongsTo(Users);

Courses.hasMany(CourseModules, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
CourseModules.belongsTo(Courses);

CourseModules.hasMany(Lectures, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Lectures.belongsTo(CourseModules);

Payments.belongsTo(Users);

Users.hasMany(Enrollments, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = {
  Courses,
  Lectures,
  CourseModules,
  Users,
  Payments,
  Enrollments,
  ContactUS
};
