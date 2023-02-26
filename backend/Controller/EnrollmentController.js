const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const { Enrollments } = require("../Models/index");

const CreateEnrollement = async (req, res, next) => {
  const { userUserID, courseId } = req.body;
  try {
    const anyEnrollement = await Enrollments.findAll({
      where: { [Op.and]: [{ courseId }, { userUserID }] },
    });
    if (anyEnrollement.length > 0)
      return res.send(409).json("you have already enrolled to this course");
    const enrolledCourses = await Enrollments.create({
      isEnrolled: true,
      userUserID,
      courseId,
    });
    res.send(200).json(enrolledCourses);
  } catch (error) {
    res.status(500).json({ message: error.message }); // server error
    next(error);
  }
};

module.exports = {
  CreateEnrollement,
};
