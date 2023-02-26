const express = require('express')
const router = express.Router()
const EnrollementController = require('../Controller/EnrollmentController')


router.post('/', EnrollementController.CreateEnrollement )


module.exports = router