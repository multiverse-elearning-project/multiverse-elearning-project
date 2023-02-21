const express = require('express')
const router = express.Router()
const LectureController = require('../Controller/LecturesController')


router.post('/', LectureController.createLecture )
router.get('/:id', LectureController.getAllLecturesByID )
router.patch('/:id', LectureController.editSingleLecture)
router.delete('/:id', LectureController.deleteSingleLecture)

module.exports = router