const express = require("express");
const router = express.Router();
const db = require('../db');
const { Lecture } = require("module");

//Request check
router.use((req, res, next) => {
	console.log("Request made to LECTURES Route");
	next();
})

// GET /all items
router.get("/", async (req, res, next) => {
  try {
    const lectures = await Lecture.findAll();
    res.send(lectures);
  } catch (error) {
    next(error);
  }
});
 


module.exports = router;