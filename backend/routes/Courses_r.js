const express = require('express')
const router = express.Router()
const CoursesController = require('../Controller/CoursesController')

router.get('/', CoursesController.getAllCourses )
router.post('/', CoursesController.CreateCourse )
router.patch('/:courseID', CoursesController.editSingleCourse )
router.delete('/:courseID', CoursesController.deleteSingleCourse )

module.exports = router