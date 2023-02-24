const express = require('express')
const router = express.Router()
const LectureController = require('../Controller/LecturesController')


router.post('/', LectureController.createLecture )
router.get('/', LectureController.getAllLectures )
router.get('/:lectureID', LectureController.getAllLecturesByID )
router.patch('/:lectureID', LectureController.editSingleLecture)
router.delete('/:lectureID', LectureController.deleteSingleLecture)

module.exports = router