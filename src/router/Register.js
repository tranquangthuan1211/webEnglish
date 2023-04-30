const express = require('express');
const router = express.Router();
const registerController = require('../Controller/RegisterCotroller');

router.get('/', registerController.index);
router.get('/teacher', registerController.RegisterSteacher);
router.post('/teacher', registerController.handleTeacher);
router.get('/student', registerController.RegisterStudent);
router.post('/student', registerController.handleStudent);
module.exports = router;
