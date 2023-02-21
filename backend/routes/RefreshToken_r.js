const express = require('express')
const router = express.Router()
const handleRefreshToken = require('../Controller/RefreshController')

router.get('/', handleRefreshToken.handleRefreshToken )

module.exports = router