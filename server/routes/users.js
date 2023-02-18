const express = require("express");
const db = require('../db');
const router = express.Router();
const path = require('path');
const { User } = require("../models");

//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to USERS Route");
	next();
})

// GET /all items
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// GET / items by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedUsers = await User.findByPk(req.params.id);
    res.send(selectedUsers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;