const express = require('express');
const router = express.Router();
const vocabularyController = require('../Controller/VocabularyController');

router.get('/', vocabularyController.index);
router.get('/a1-a2-vocabulary', vocabularyController.vocabulary1);
router.get('/b1-b2-vocabulary', vocabularyController.vocabulary2);
router.get('/different-vocabulary', vocabularyController.vocabulary3);

module.exports = router;
