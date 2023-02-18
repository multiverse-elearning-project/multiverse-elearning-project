const express = require("express");
const router = express.Router();
const db = require('../db');
const { Enrollment } = require("../models");

//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to ENROLLMENT Route");
	next();
})

// GET /all items
router.get("/", async (req, res, next) => {
  try {
    const enrollemts = await Enrollment.findAll();
    res.send(enrollemts);
  } catch (error) {
    next(error);
  }
});


module.exports = router;