const admin = require('../models/admin');
const bcrypt = require('bcrypt');

exports.signUp = async (req, res, next) => {
    res.render('admin/signUp')
};

exports.signUpPost = async (req, res, next) => {
    const body=req.body;
    const hashPassword = bcrypt.hashSync(body.password, 10); 
    const data = {
        ten:body.ten,
        diaChi:body.diaChi,
        sdt:body.sdt,
        username:body.username,
        password:hashPassword
    }
    await admin.add(data);
    res.render('index')
};

exports.signIn = async (req, res, next) => {
    res.render('admin/signIn')
};

exports.signInPost = async (req, res, next) => {
    const body=req.body;
    const data = await admin.list();
    var count=0;
    for(var i=0;i<data.length;i++){
        if(bcrypt.compareSync(body.password, data[i].password)) {
            count++;          
            res.render('index');
        }
    }  
    if(count==0){
        const thongBao="Tên đăng nhập hoặc mật khẩu không chính xác";
        res.render('admin/signIn',{thongBao});
    }   
};