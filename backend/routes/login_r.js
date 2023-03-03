const express = require('express')
const router = express.Router()
const LoginController = require('../Controller/LoginController')

router.post('/', LoginController.LoginHandeler);
router.get("/:userID", LoginController.getUserByID);
router.patch("/:userID", LoginController.editSingleUser);


module.exports = router