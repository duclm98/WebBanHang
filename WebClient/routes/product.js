var express = require('express');
var router = express.Router();

const product = require('../controllers/product');

router.get('/:maSP', product.home);

module.exports = router;