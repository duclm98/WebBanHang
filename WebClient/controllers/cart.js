const cart = require('../models/cart');
const order = require('../models/order');
const product = require('../models/product');

exports.add = async (req, res, next) => {
    const idProduct = req.params['id']; 
    const USER = req.user;
    if(USER){
        await cart.add(USER.email,idProduct);
    }
    res.redirect('../list');
};

exports.delete = async (req, res, next) => {
    const idProduct = req.params['id']; 
    const USER = req.user;
    if(USER){
        await cart.delete(idProduct);
    }
    res.redirect('../list');
};

exports.list = async (req, res, next) => {
    const USER = req.user;
    var data = [];//Danh sách chi tiết các sản phẩm trong giỏ hàng
    if(USER){
        const LIST = await cart.list(USER.email);//Lấy ra danh sách các sản phẩm trong giỏ hàng của user
        const count = LIST.length;
        for(var i=0;i<count;i++){
            const PRODUCT = await product.detail(LIST[i].idProduct)
            data.push(PRODUCT);
        }
    }  
    res.render('cart/list',{data,user:USER});
};

exports.checkout = async (req, res, next) => {
    const USER = req.user;
    var data = [];//Danh sách chi tiết các sản phẩm trong giỏ hàng
    var total = 0;//Tổng tiền
    if(USER){
        const LIST = await cart.list(USER.email);//Lấy ra danh sách các sản phẩm trong giỏ hàng của user
        const count = LIST.length;
        for(var i=0;i<count;i++){
            const PRODUCT = await product.detail(LIST[i].idProduct)
            data.push(PRODUCT);
            total = total + (PRODUCT.gia);
        }
    }  
    res.render('cart/checkout',{data,total,user:USER});
};

exports.checkoutPost = async (req, res, next) => {
    const USER = req.user;
    if(USER){
        const arrIdProduct = [];//Mảng chứa id các sản phẩm sẽ được đưa vào đơn hàng
        const LIST = await cart.list(USER.email);
        const count = LIST.length;
        for(var i=0;i<count;i++){
            arrIdProduct.push(LIST[i].idProduct);
        }
        const currentdate = new Date(); //Lấy ngày giờ mua hàng
        const datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        const data = {//Đơn hàng
            nguoiNhan:req.body.ten,
            sdtNguoiNhan:req.body.sdt,
            diaChiNhan:req.body.diaChi,
            listIdProduct:arrIdProduct,
            time:datetime,
            trangThai:0
        }
        await order.add(data);

        for(var i=0;i<count;i++){//Xóa các sản phẩm khỏi giỏ hàng
            await cart.delete(LIST[i].idProduct);
        }
    }  
    res.redirect('./list');
};