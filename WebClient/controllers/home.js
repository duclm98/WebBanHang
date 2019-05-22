const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const product = mongoose.model('product');

exports.home = async (req, res, next) => {
    await product.find().exec((err,products)=>{
        const prodArr={
            prod0:products[0],
            prod1:products[1],
            prod2:products[2],
            prod3:products[4],
            prod4:products[5]
        }
        res.render('index', {prodArr});
    })   
};