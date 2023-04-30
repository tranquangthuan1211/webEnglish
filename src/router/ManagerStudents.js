const express = require('express');
const router = express.Router();
const managerStudentsController = require('../ControllerTeacher/ManagerStudentsController');

router.get('/:slug', managerStudentsController.index);
router.put('/:slug', managerStudentsController.handleUpdateScore);
module.exports = router;
