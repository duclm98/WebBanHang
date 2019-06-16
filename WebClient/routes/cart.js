const express = require('express');
const router = express.Router();
const cart = require('../controllers/cart');

router.get('/add/:id', cart.add);

router.get('/list', cart.list);

module.exports = router;