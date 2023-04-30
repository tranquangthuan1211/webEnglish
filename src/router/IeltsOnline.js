const express = require('express');
const router = express.Router();
const ieltsOnlineController = require('../Controller/IeltsOnlineController');

router.get(
    '/',
    ieltsOnlineController.getUser,
    ieltsOnlineController.getDocuments,
    ieltsOnlineController.getHomeWork,
    ieltsOnlineController.index,
);

module.exports = router;
