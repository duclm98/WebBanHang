const product = require('../models/product');

exports.store = async (req, res, next) => {
    const data = await product.list();
    console.log(data);
    const prodArr={
        prod0:data[0],
        prod1:data[1],
        prod2:data[2],
        prod3:data[3],
        prod4:data[4],
        prod5:data[5],
        prod6:data[0],
        prod7:data[1],
        prod8:data[2],
    }
    res.render('product/store', {prodArr}); 
};

exports.info = async (req, res, next) => {
    const id = req.params['id']; 
    const prod = await product.detail(id);
    res.render('product/infoProduct', {prod}); 
};