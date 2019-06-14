const cart = require('../models/cart');

exports.add = async (req, res, next) => {
    const data = await product.list();
    res.render('product/list', {data,title:"Cửa hàng"}); 
};