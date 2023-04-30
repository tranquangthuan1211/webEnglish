const express = require('express');
const router = express.Router();
const updateSchduleController = require('../ControllerTeacher/UpdateSchdeule');

router.put('/schedule', updateSchduleController.updateSchedule);
router.get('/schedule', updateSchduleController.scheduleUpdate, updateSchduleController.index);
module.exports = router;
