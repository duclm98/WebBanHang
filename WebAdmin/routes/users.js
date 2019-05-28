var express = require('express');
var router = express.Router();
const user = require('../controllers/users');

router.get('/', user.list );

module.exports = router;
