const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const { Courses, Users, CourseModules, Lectures } = require("../Models/index");

const createModule = async (req, res, next) => {
  try {
    const { moduleName, moduleUrl, excersices, description, courseCourseID } =
      req.body;
    if (
      !moduleName ||
      !moduleUrl ||
      !excersices ||
      !description ||
      !courseCourseID
    )
      return res.send(400).json({ message: "please fill all fields" });
    await CourseModules.create({
      moduleName,
      moduleUrl,
      excersices,
      description,
      courseCourseID,
    });
    res.send(200).json({ message: "module has been created" });
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};

const getAllModules = async (req, res, next) => {
  try {
    const courseID = req.params.courseID;
    const modules = await CourseModules.findAll(
      {
        include: [
          {
            model: Lectures,
          },
        ],
      },
      { where: { courseCourseID: courseID } }
    );
    res.json(modules);
  } catch (error) {
    res.status(500).json({ message: error.message }); // server error
    next(error);
  }
};

const editSingleModule = async (req, res, next) => {
  const { moduleName, moduleUrl, excersices, description } = req.body;
  const payload = {
    moduleName,
    moduleUrl,
    excersices,
    description,
  };
  try {
    const updatedCourse = await CourseModules.update(payload, {
      where: {
        moduleID: req.params.moduleID,
      },
    });
    res.send(updatedCourse);
  } catch (error) {
    next(error);
  }
};

const deleteSingleModule = async (req, res, next) => {
  try {
    await CourseModules.destroy({
      where: {
        moduleID: req.params.moduleID,
      },
    });
    const modules = await CourseModules.findAll();
    res.send(modules);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createModule,
  getAllModules,
  editSingleModule,
  deleteSingleModule,
};
