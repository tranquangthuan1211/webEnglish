const express = require('express');
const router = express.Router();
const adviceController = require('../ControllerTeacher/AdviceController');

router.get('/', adviceController.getViewAdvice);
router.post('/', adviceController.saveAdvie);
module.exports = router;
