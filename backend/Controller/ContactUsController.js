const express = require("express");
const router = express.Router();
const { ContactUS } = require("../Models/index");

const createFeedBack = async (req, res, next) => {
  try {
    const { email, message } = req.body;
    if (!message && !email)
      return res.status(400).json({ msg: "Please fill all fields." });
    const feedback = await ContactUS.create({
      email,
      message,
    });
    res.status(200).json({
      msg: "Your query has been submitted successfully!!",
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFeedBack,
};

