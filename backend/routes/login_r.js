const express = require('express')
const router = express.Router()
const LoginController = require('../Controller/LoginController')

router.post('/', LoginController.LoginHandeler )

module.exports = router