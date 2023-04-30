const express = require('express');
const router = express.Router();
const grammarController = require('../Controller/GrammarController');

router.get('/', grammarController.index);
router.get('/a1-a2-grammar', grammarController.grammar1);
router.get('/b1-b2-grammar', grammarController.grammar2);
router.get('/different-grammar', grammarController.grammar3);
module.exports = router;
