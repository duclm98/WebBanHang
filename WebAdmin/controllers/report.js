const report = require('../models/report');
const product = require('../models/product');

exports.top = async (req, res, next) => {
    const ORDERS = await report.list();
    const arrId =[];
    for(var i=0;i<ORDERS.length;i++){
        const listIdInCollection = ORDERS[i].listIdProduct;
        for(var j=0;j<listIdInCollection.length;j++){
            arrId.push(listIdInCollection[j]);
        }      
    }
    var data = [];
    var n = [];
    var temp = [];
    for(var i=0;i<arrId.length;i++){
        temp[i]=0;
    }
    for(var i=0;i<arrId.length;i++){
        var count = 1;
        if(temp[i] == 0){
            temp[i]=1;
            for(var j=i+1;j<arrId.length;j++){
                if(arrId[j] == arrId[i]){
                    count = count +1;
                    temp[j] = 1;
                }
            }
            data.push(arrId[i]);
            n.push(count);
        }
    }
    const list = [];
    for(var i=0;i<data.length;i++){
        list[i] = await product.detail(data[i]);
        list[i].soLuongBan=n[i];
    }
    res.render('report/top',{list})
};     