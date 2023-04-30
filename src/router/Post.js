const express = require('express');
const router = express.Router();
const postController = require('../ControllerTeacher/PostController');

router.get('/home-work', postController.homeWork);
router.post('/home-work', postController.saveHomeWork);
router.get('/document', postController.document);
router.post('/document', postController.saveDocuments);
router.get('/schedule', postController.schedule);
router.post('/schedule', postController.saveSchedule);

module.exports = router;
