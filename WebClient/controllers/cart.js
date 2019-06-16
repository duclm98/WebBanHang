const cart = require('../models/cart');

exports.add = async (req, res, next) => {
    const idProduct = req.params['id']; 
    const USER = req.user;
    if(USER){
        await cart.add(USER.email,idProduct);
    }
    res.redirect('/');
};

exports.list = async (req, res, next) => {
    const USER = req.user;
    var data = [];
    if(USER){
        data = await cart.list(USER.email);
    }
    res.render('cart/list',{data});
};