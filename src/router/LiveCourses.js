const express = require('express');
const router = express.Router();
const liveCoursesController = require('../Controller/LiveCoursesController');

router.get('/', liveCoursesController.index);

module.exports = router;
