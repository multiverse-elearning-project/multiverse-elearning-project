const express = require('express')
const router = express.Router()
const RegistrationController = require('../Controller/RegistrationController')

router.post('/', RegistrationController.RegistrationController )

module.exports = router