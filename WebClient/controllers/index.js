const product = require('../models/product');

exports.index = async (req, res, next) => {
    const data = await product.list();
    const prodArr={
        prod0:data[0],
        prod1:data[1],
        prod2:data[2],
        prod3:data[3],
        prod4:data[4]
    }
    res.render('index', {prodArr});
};