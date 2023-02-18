const express = require("express");
const router = express.Router();
const db = require('../db');
const { Module } = require("module");

//Request check
router.use((req, res, next) => {
	console.log("Request made to MODULES Route");
	next();
})

// GET /all items
router.get("/", async (req, res, next) => {
  try {
    const modules = await Module.findAll();
    res.send(modules);
  } catch (error) {
    next(error);
  }
});


module.exports = router;