const user = require('../models/users');
const bcrypt = require('bcrypt');

exports.signUp = async (req, res, next) => {
    res.render('users/signUp');
};

exports.signUpPost = async (req, res, next) => {
    const body=req.body;
    const hashPassword = bcrypt.hashSync(body.password, 10); 
    const data = {
        ho:body.ho,
        ten:body.ten,
        diaChi:body.diaChi,
        tp:body.tp,
        sdt:body.sdt,
        username:body.username,
        password:hashPassword
    }
    await user.add(data);
    res.redirect('./');
};

exports.signIn = async (req, res, next) => { 
    res.render('users/signIn'); 
};

exports.signInPost = async (req, res, next) => { 
    const body=req.body;
    const data = await user.list();
    var count=0;
    for(var i=0;i<data.length;i++){
        if(bcrypt.compareSync(body.password, data[i].password)) {
            count++;
            const user = data[i];
            res.render('users/chiTiet',{user});
        }
    }  
    if(count==0){
        const thongBao="Tên đăng nhập hoặc mật khẩu không chính xác";
        res.render('users/signIn',{thongBao});
    }     
};

