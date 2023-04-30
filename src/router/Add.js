const express = require('express');
const router = express.Router();
const addController = require('../ControllerTeacher/AddController');
router.get('/', addController.index);
router.put('/', addController.handleAddStudents);
router.post('/', addController.handleScoreStart);

module.exports = router;
