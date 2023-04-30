const express = require('express');
const router = express.Router();
const skillsController = require('../Controller/SkillsController');

router.get('/listening', skillsController.listening);
router.get('/reading', skillsController.reading);
router.get('/speaking', skillsController.speaking);
router.get('/writting', skillsController.writting);
router.get('/', skillsController.index);

module.exports = router;
