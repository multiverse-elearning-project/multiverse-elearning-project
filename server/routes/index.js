const express = require("express");
const router = express.Router();


//routers
router.use('/courses', require('./courses'));
router.use('/users', require('./users'));
router.use('/instructors', require('./instructors'));
router.use('/modules', require('./modules'));
router.use('/payments', require('./payments'));
router.use('/lectures', require('./lectures'));
router.use('/enrollments', require('./enrollments'));


module.exports = router;
