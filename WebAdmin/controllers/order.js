const order = require('../models/order');
const product = require('../models/product');

exports.delivery = async (req, res, next) => {
    const data = await order.delivery();
    res.render('order/delivery',{data})
};
exports.delivery_detail = async (req, res, next) => {
    const id = req.params['id'];
    const ORDER = await order.detail(id);
    const data =[];
    const listId = ORDER.listIdProduct;
    for(var i=0;i<listId.length;i++){
        PRODUCT = await product.detail(ORDER.listIdProduct[i]);
        data.push(PRODUCT);
    }
    res.render('order/detail',{data})
};

exports.delivered = async (req, res, next) => {
    const data = await order.delivered();
    res.render('order/delivered',{data})
};
exports.delivered_detail = async (req, res, next) => {
    const id = req.params['id'];
    const ORDER = await order.detail(id);
    const data =[];
    const listId = ORDER.listIdProduct;
    for(var i=0;i<listId.length;i++){
        PRODUCT = await product.detail(ORDER.listIdProduct[i]);
        data.push(PRODUCT);
    }
    res.render('order/detail',{data})
};

exports.deliver = async (req, res, next) => { //Giao hàng
    const id = req.params['id'];
    await order.update(id);
    res.redirect('/order/delivery')
};