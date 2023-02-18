const express = require("express");
const router = express.Router();
const db = require('../db');
const { Payment } = require("../models");

//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to PAYMENTS Route");
	next();
})


// GET /all items
router.get("/", async (req, res, next) => {
  try {
    const payments = await Payment.findAll();
    res.send(payments);
  } catch (error) {
    next(error);
  }
});


module.exports = router;