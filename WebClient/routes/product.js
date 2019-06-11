const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

router.get('/', product.list);
router.get('/:loai', product.category);

router.get('/info/:id', product.info);

module.exports = router;