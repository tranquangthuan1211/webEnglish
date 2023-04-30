const express = require('express');
const router = express.Router();
const changePassController = require('../Controller/ChangePassController');
router.get('/', changePassController.index);
router.put('/', changePassController.update);

module.exports = router;
