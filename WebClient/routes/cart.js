const express = require('express');
const router = express.Router();
const cart = require('../controllers/cart');

router.get('/add/:id', cart.add);

router.get('/delete/:id', cart.delete);

router.get('/list', cart.list);

router.get('/checkout', cart.checkout);
router.post('/checkout', cart.checkoutPost);

module.exports = router;