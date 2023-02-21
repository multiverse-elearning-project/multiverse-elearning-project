const express = require("express");
const router = express.Router();
const { Instructor } = require("../models");


//Request check
router.use((req, res, next) => {
	console.log("Request made to ISNSTRUCTORS Route");
	next();
})

// GET /all lists of avalable instructors 
router.get("/", async (req, res, next) => {
  try {
    const instructors = await Instructor.findAll();
    res.send(instructors);
  } catch (error) {
    next(error);
  }
});

// GET / spesific instructor by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedInstructor = await Instructor.findByPk(req.params.id);
    res.send(selectedInstructor);
  } catch (error) {
    next(error);
  }
});

// GET instructors by courseType
router.get("/courseType/:courseType", async (req, res, next) => {
  try {
    const courseType = await Course.findAll({where: {courseType: req.params.type}});
    res.send(courseType);
  } catch (error) {
    next(error);
  }
});

//POST /create instructor 
router.post("/", async (req, res, next) => {
  try {
    const [instructor, createdInstructors] = await Instructor.findOrCreate({
      where: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
				password: req.body.password,
				email: req.body.email
      }
    });
    res.send(instructor);
  } catch (error) {
    next(error);
  }
});

// PUT / Update instructor list by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedInstructor = await Instructor.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedInstructor);
  } catch (error) {
    next(error);
  }
});

// DELETE / from instructors list by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await Instructor.destroy({
      where: {
        id: req.params.id
      }
    });
    const instructors = await Instructor.findAll();
    res.send(instructors);
  } catch (error) {
    next(error);
  }
});

module.exports = router;