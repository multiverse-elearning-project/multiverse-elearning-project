require("dotenv").config();
const express = require('express')
const router = express.Router()
const logoutHandler = require('../Controller/logoutController')

router.get('/', logoutHandler.handleLogout )

module.exports = router