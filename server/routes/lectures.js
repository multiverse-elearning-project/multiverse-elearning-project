const express = require("express");
const router = express.Router();
const { Lecture } = require("../models");

//Request check
router.use((req, res, next) => {
	console.log("Request made to LECTURES Route");
	next();
})

// GET /all lists of lectures
router.get("/", async (req, res, next) => {
  try {
    const lectures = await Lecture.findAll();
    res.send(lectures);
  } catch (error) {
    next(error);
  }
});

// GET / select and GET spesific lectures by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedLecture = await Lecture.findByPk(req.params.id);
    res.send(selectedLecture);
  } catch (error) {
    next(error);
  }
});

// GET lectures by module category
router.get("/moduleType/:moduleType", async (req, res, next) => {
  try {
    const listLectureByModule = await Lecture.findAll({where: {module: req.params.type}});
    res.send(listLectureByModule);
  } catch (error) {
    next(error);
  }
});

//POST /create list of lectures 
router.post("/", async (req, res, next) => {
  try {
    const [lecture, createdLectures] = await Lecture.findOrCreate({
      where: {
        lectureName: req.body.lectureName,
        lectureUrl: req.body.lectureUrl,
        moduleType: req.body.moduleType,
				description: req.body.description
      }
    });
    res.send(lecture);
  } catch (error) {
    next(error);
  }
});

// PUT / Update lecture list by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedLectures = await Lecture.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedLectures);
  } catch (error) {
    next(error);
  }
});

// DELETE / from lectures list by id ??? from which Module ???
router.delete("/:id", async (req, res, next) => {
  try {
    await Lecture.destroy({
      where: {
        id: req.params.id
      }
    });
    const lectures = await Lecture.findAll();
    res.send(lectures);
  } catch (error) {
    next(error);
  }
});
 

module.exports = router;