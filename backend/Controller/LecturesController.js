const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const { Lectures } = require("../Models/index");

const createLecture = async (req, res, next) => {
  try {
    const {
      id,
      lectureName,
      lectureUrl,
      lectureDuration,
      description,
      moduleModuleID,
    } = req.body;
    if (!id||
      !lectureName ||
      !lectureUrl ||
      !lectureDuration ||
      !description ||
      !moduleModuleID
    )
      return res.sendStatus(400).json({ message: "please fill all fields" });
    await Lectures.create({
      id,
      lectureName,
      lectureUrl,
      lectureDuration,
      description,
      moduleModuleID,
    });
    res.sendStatus(200).json({ message: "lecture has been created" });
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

const getAllLectures = async (req, res, next) => {
  try {
    const moduleModuleID = req.params.moduleModuleID;
    const lectures = await Lectures.findAll();
    res.json(lectures);
  } catch (error) {
    res.status(500).json({ message: error.message }); // server error
    next(error);
  }
};
const getAllLecturesByID = async (req, res, next) => {
  try {
    const moduleModuleID = req.params.moduleModuleID;
    const lectureID = req.params.lectureID;
    const lectures = await Lectures.findAll({
      where: {
        [Op.and]: [
          { moduleModuleID: moduleModuleID },
          { lectureID: lectureID },
        ],
      },
    });
    res.json(lectures);
  } catch (error) {
    res.status(500).json({ message: error.message }); // server error
    next(error);
  }
};
const editSingleLecture = async (req, res, next) => {
  const { lectureName, lectureUrl, lectureDuration, description } = req.body;
  const payload = {
    lectureName,
    lectureUrl,
    lectureDuration,
    description,
  };
  try {
    const updatedLecture = await Lectures.update(payload, {
      where: {
        lectureID: req.params.lectureID,
      },
    });
    res.send(updatedLecture);
  } catch (error) {
    next(error);
  }
};

const deleteSingleLecture = async (req, res, next) => {
  try {
    await Lectures.destroy({
      where: {
        lectureID: req.params.lectureID,
      },
    });
    const lectures = await Lectures.findAll();
    res.send(lectures);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createLecture,
  getAllLectures,
  getAllLecturesByID,
  editSingleLecture,
  deleteSingleLecture,
};
