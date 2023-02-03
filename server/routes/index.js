const express = require("express");
const router = express.Router();

// model routers
router.use('/instructors', require('./instructors'));
router.use('/courses', require('./courses'));
router.use('/modules', require('./modules.js'));
router.use('/users', require('./users'));
router.use('/payments', require('./payments'));

module.exports = router;