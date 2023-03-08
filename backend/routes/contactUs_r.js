const express = require("express");
const router = express.Router();
const ContactUSController = require("../Controller/ContactUsController");

router.post("/", ContactUSController.createFeedBack);

module.exports = router;
