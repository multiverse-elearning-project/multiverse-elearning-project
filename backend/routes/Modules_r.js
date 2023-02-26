const express = require('express')
const router = express.Router()
const ModulesController = require('../Controller/ModulesController')

router.get('/', ModulesController.getAllModules )
router.post('/', ModulesController.createModule )
router.get('/:moduleID', ModulesController.getModulesByID )
router.patch('/:moduleID', ModulesController.editSingleModule )
router.delete('/:moduleID', ModulesController.deleteSingleModule )

module.exports = router

//courses/modules