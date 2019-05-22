const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

router.get('/', product.index);

router.get('/add', product.add);
router.post('/add', product.addPost);

router.get('/delete', product.delete);
router.get('/delete/:id', product.deleteProduct);

router.get('/update', product.update);
router.get('/:id', product.edit);
router.post('/update/:id', product.updatePost);

module.exports = router;