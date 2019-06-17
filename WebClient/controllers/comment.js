const comment = require('../models/comment');
const users = require('../models/users');

exports.addPost = async (req, res, next) => {
    const id = req.params['id'];
    const USER = req.user;
    var EMAIL = "";
    var TEN = req.body.ten;
    if(USER){
        EMAIL=USER.email;
        TEN=USER.ten;
    }
    const currentdate = new Date(); //Lấy ngày giờ mua hàng
    const datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
    const COMMENT ={
        idSanPham:id,
        email:EMAIL,
        ten:TEN,
        nhanXet:req.body.nhanXet,
        dateTime:datetime
    }
    await comment.add(COMMENT);
    const path = "/product/info/"+id;
    res.redirect(path);
}; 