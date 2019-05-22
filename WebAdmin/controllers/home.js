const product = require('../models/product');

exports.index = async (req, res, next) => {
    const data = await product.list();
    res.render('index', { data })
};