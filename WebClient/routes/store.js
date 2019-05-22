var express = require('express');
var router = express.Router();

const store = require('../controllers/store');

router.get('/', store.home);

module.exports = router;