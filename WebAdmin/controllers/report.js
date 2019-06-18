const report = require('../models/report');
const product = require('../models/product');

exports.top = async (req, res, next) => {
    const ORDERS = await report.list();
    const listProduct =[];
    for(var i=0;i<ORDERS.length;i++){
        const listIdInCollection = ORDERS[i].listIdProduct;
        for(var j=0;j<listIdInCollection.length;j++){
            const PRODUCT = await product.detail(listIdInCollection[j]);
            listProduct.push(PRODUCT);
        }      
    }
    var data = [];
    var n = [];
    var temp = [];
    for(var i=0;i<listProduct.length;i++){
        temp[i]=0;
    }
    for(var i=0;i<listProduct.length;i++){
        var count = 1;
        if(temp[i] == 0){
            temp[i]=1;
            for(var j=i+1;j<listProduct.length;j++){
                if(listProduct[j].ma == listProduct[i].ma){
                    count = count +1;
                    temp[j] = 1;
                }
            }
            data[i]=listProduct[i];
            n[i] = count;
        }
    }
    for(var i=0;i<n.length-1;i++){
        for(var j=i+1;j<n.length;j++){
            if(n[i]<n[j]){
                const tmp1 = n[i];
                const tmp2 = data[i];

                n[i] = n[j];
                data[i] = data[j];

                n[j] = tmp1;
                data[j] = tmp2;
            }
        }
    }
    const list = data;
    for(var i=0;i<data.length;i++){
        list[i].soLuongBan=n[i];
    }
    console.log(list);
    res.render('report/top',{list})
};     