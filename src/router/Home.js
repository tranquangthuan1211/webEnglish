const express = require('express');
const router = express.Router();
const homeController = require('../Controller/HomeController');

router.get('/home', homeController.listStudents, homeController.listScores, homeController.index1);
module.exports = router;
