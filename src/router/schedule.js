const express = require('express');
const router = express.Router();
const schedulesController = require('../Controller/SchedulesController');

router.get('/', schedulesController.getUser, schedulesController.handleSchedule, schedulesController.index);
module.exports = router;
