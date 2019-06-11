const product = require('../models/product');

exports.list = async (req, res, next) => {
    const data = await product.list();
    res.render('product/list', {data}); 
};

exports.category = async (req, res, next) => {
    const loai = req.params['loai'];
    const data = await product.category(loai);
    res.render('product/list', {data}); 
};

exports.info = async (req, res, next) => {
    const id = req.params['id']; 
    const data = await product.detail(id);
    console.log(data);
    res.render('product/info', {data}); 
};