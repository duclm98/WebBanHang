var express = require('express');
var router = express.Router();
const home = require('../controllers/home');

router.get('/', home.index);

module.exports = router;
