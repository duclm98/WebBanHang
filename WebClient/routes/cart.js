const express = require('express');
const router = express.Router();
const cart = require('../controllers/cart');

router.get('/add', cart.add);

module.exports = router;