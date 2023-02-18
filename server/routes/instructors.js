const express = require("express");
const router = express.Router();
const db = require('../db');
const { Instructor } = require("../models");


//Request check
router.use((req, res, next) => {
	console.log("Request made to ISNSTRUCTORS Route");
	next();
})

// GET /all items
router.get("/", async (req, res, next) => {
  try {
    const instructors = await Instructor.findAll();
    res.send(instructors);
  } catch (error) {
    next(error);
  }
});


module.exports = router;