const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const product = mongoose.model('product');

exports.home = async (req, res, next) => {
    const maSP = req.params['maSP']; 
    await product.find({ma:maSP}).exec((err,products)=>{
        const prod=products[0];
        res.render('product', {prod});
    })   
};