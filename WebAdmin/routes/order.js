const express = require('express');
const router = express.Router();
const order = require('../controllers/order');

router.get('/delivery', order.delivery);//Chưa giao hàng
router.get('/delivery/:id', order.delivery_detail);

router.get('/delivered', order.delivered);//Đã giao hàng
router.get('/delivered/:id', order.delivered_detail);

router.get('/deliver/:id', order.deliver);//Giao hàng

module.exports = router;