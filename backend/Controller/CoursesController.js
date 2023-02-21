const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const { Courses, Users } = require("../Models/index");

const CreateCourse = async (req, res, next) => {
  const {
    courseName,
    courseType,
    coursePrice,
    courseReleaseDate,
    description,
    userUserID,
  } = req.body;

  try {
    if (
      !courseName ||
      !courseType ||
      !coursePrice ||
      !courseReleaseDate ||
      !description ||
      !userUserID
    )
      return res
        .send(400)
        .json({ message: "please fill all the required informations" });
    const anycourse = await Courses.findAll({
      where: { [Op.and]: [{ courseName }, { userUserID }] },
    });
    if (anycourse.length > 0)
      return res
        .send(409)
        .json("you have already created a course with this name");
    const createdCourses = await Courses.create({
      courseName,
      courseType,
      coursePrice,
      courseReleaseDate,
      description,
      userUserID,
    });
    res.send(200).json("your course has been successfully created !!!");
  } catch (error) {
    res.status(500).json({ message: error.message }); // server error
    next(error);
  }
};

const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Courses.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message }); // server error
    next(error);
  }
};

const editSingleCourse = async (req, res, next) => {
  const {
    courseName,
    courseType,
    coursePrice,
    courseReleaseDate,
    description,
  } = req.body;
  const payload = {
    courseName,
    courseType,
    coursePrice,
    courseReleaseDate,
    description,
  };
  try {
    const updatedCourse = await Courses.update(payload, {
      where: {
        courseID: req.params.courseID,
      },
    });
    res.send(updatedCourse);
  } catch (error) {
    next(error);
  }
};

const deleteSingleCourse = async (req, res, next) => {
  try {
    await Courses.destroy({
      where: {
        courseID: req.params.courseID,
      },
    });
    const courses = await Courses.findAll();
    res.send(courses);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCourses,
  CreateCourse,
  editSingleCourse,
  deleteSingleCourse,
};
