const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

router.get('/', product.store);

router.get('/:id', product.info);

module.exports = router;