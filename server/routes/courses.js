const express = require("express");
const router = express.Router();
const { Course } = require("../models");


//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to COURSE Route");
	next();
})

// GET /all items
router.get("/", async (req, res, next) => {
  try {
    const courses = await Course.findAll();
    res.send(courses);
  } catch (error) {
    next(error);
  }
});

// GET / items by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedCourses = await Course.findByPk(req.params.id);
    res.send(selectedCourses);
  } catch (error) {
    next(error);
  }
});

// GET /courses by courseType
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
    const [course, courseCreated] = await Course.findOrCreate({
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

// PUT / Update item by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedItem = await Item.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedItem);
  } catch (error) {
    next(error);
  }
});


// DELETE / item by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await Item.destroy({
      where: {
        id: req.params.id
      }
    });
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;