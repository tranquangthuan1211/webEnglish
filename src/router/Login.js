const express = require('express');
const router = express.Router();
const homeController = require('../Controller/HomeController.js');
const useController = require('../Controller/UseController');
const Auth = require('../middleware/auth.middleware.js');

router.get('/', homeController.login);
router.post('/', homeController.handleLogin);

module.exports = router;
