const report = require('../models/report');
const product = require('../models/product');

exports.top = async (req, res, next) => {
    const ORDERS = await report.list();
    const data =[];
    for(var i=0;i<ORDERS.length;i++){
        const listIdInCollection = ORDERS[i].listIdProduct;
        for(var j=0;j<listIdInCollection.length;j++){
            const PRODUCT = await product.detail(listIdInCollection[j]);
            data.push(PRODUCT);
        }      
    }
    res.render('report/top',{data})
};