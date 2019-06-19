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
            email:USER.email,
            nguoiNhan:req.body.ten,
            sdtNguoiNhan:req.body.sdt,
            diaChiNhan:req.body.diaChi,
            listIdProduct:arrIdProduct,
            time:datetime,
            trangThai:false
        }
        await order.add(data);

        for(var i=0;i<count;i++){//Xóa các sản phẩm khỏi giỏ hàng
            await cart.delete(LIST[i].idProduct);
        }
    }  
    res.redirect('/cart/orders');
};

exports.orders = async (req, res, next) => {
    const USER = req.user;
    var data = [];
    if(USER){
        ORDER = await order.list(USER.email)
        data = ORDER;
        for(var i=0;i<ORDER.length;i++){
            var total = 0;
            var LISTPRODUCT =[];
            for(var j=0;j<ORDER[i].listIdProduct.length;j++){
                const PRODUCT = await product.detail(ORDER[i].listIdProduct[j])
                LISTPRODUCT.push(PRODUCT);
                total = total + PRODUCT.gia;
            }
            data[i].listProduct=LISTPRODUCT;
            data[i].total=total;
        }      
    }  
    res.render('cart/orders',{data,user:USER});
};

exports.deleteOrders = async (req, res, next) => {
    const id = req.params['id'];
    await order.delete(id);
    res.redirect('/cart/orders');
};

exports.editAddress = async (req, res, next) => {
    const USER = req.user;
    const id = req.params['id'];
    const data = await order.detail(id);
    res.render('cart/editAddress',{data,user:USER});
};

exports.editAddressPost = async (req, res, next) => {
    const id = req.params['id'];
    await order.updateAddress(id,req.body.nguoiNhan,req.body.sdtNguoiNhan,req.body.diaChiNhan);
    res.redirect('../orders');
}; 