const express = require("express");
const router = express.Router();
const { Course } = require("../models");


//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to COURSE Route");
	next();
})

// GET all course
router.get("/", async (req, res, next) => {
  try {
    const courses = await Course.findAll();
    res.send(courses);
  } catch (error) {
    next(error);
  }
});

// GET / spesific course by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedCourses = await Course.findByPk(req.params.id);
    res.send(selectedCourses);
  } catch (error) {
    next(error);
  }
});

// GET courses by courseType
router.get("/courseType/:courseType", async (req, res, next) => {
  try {
    const courseType = await Course.findAll({where: {courseType: req.params.type}});
    res.send(courseType);
  } catch (error) {
    next(error);
  }
});

//POST Courses
router.post("/", async (req, res, next) => {
  try {
    const [course, createdCourses] = await Course.findOrCreate({
      where: {
        studentNumber: req.body.studentNumber,
        courseName: req.body.courseName,
        courseType: req.body.courseType,
        coursePrice:req.body.coursePrice,
        courseReleaseDate: req.body.courseReleaseDate,
				isEnrolled: req.body.isEnrolled,
				description: req.body.description
      }
    });
    res.send(course);
  } catch (error) {
    next(error);
  }
});

// PUT / Update course list by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedCourse = await Course.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedCourse);
  } catch (error) {
    next(error);
  }
});

// DELETE / from courses list by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await Course.destroy({
      where: {
        id: req.params.id
      }
    });
    const courses = await Course.findAll();
    res.send(courses);
  } catch (error) {
    next(error);
  }
});


module.exports = router;