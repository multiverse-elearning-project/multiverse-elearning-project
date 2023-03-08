const express = require("express");
const router = express.Router();
const LoginController = require("../Controller/LoginController");

router.post("/", LoginController.LoginHandeler);
router.get("/:id", LoginController.getUserById);
router.patch("/:id", LoginController.EditProfile);

module.exports = router;
