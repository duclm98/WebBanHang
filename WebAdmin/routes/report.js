const express = require('express');
const router = express.Router();
const report = require('../controllers/report');

router.get('/top',report.top);

module.exports = router;