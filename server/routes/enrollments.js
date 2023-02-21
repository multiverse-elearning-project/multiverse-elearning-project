const express = require("express");
const router = express.Router();
const { Enrollment } = require("../models");


//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to ENROLLMENT Route");
	next();
})

// GET /all enrolled users for courses
router.get("/", async (req, res, next) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.send(enrollments);
  } catch (error) {
    next(error);
  }
});

// GET / select spesific ????? 
router.get("/:id", async (req, res, next) => {
  try {
    const selecteEnrolled = await Enrollment.findByPk(req.params.id);
    res.send(selecteEnrolled);
  } catch (error) {
    next(error);
  }
});

// GET select enrolled users by courseType ???? 
router.get("/selectionType/:selectionType", async (req, res, next) => {
  try {
    const selectByType = await Enrollment.findAll({where: {selectionType: req.params.type}});
    res.send(selectByType);
  } catch (error) {
    next(error);
  }
});

//POST /create (Generate automatically from courses and users table)

// PUT / Update item by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedEnrollment = await Enrollment.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedEnrollment);
  } catch (error) {
    next(error);
  }
});

// DELETE / item by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await Enrollment.destroy({
      where: {
        id: req.params.id
      }
    });
    const enrolledStudent = await Enrollment.findAll();
    res.send(enrolledStudent);
  } catch (error) {
    next(error);
  }
});


module.exports = router;