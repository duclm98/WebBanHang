const product = require('../models/product');

exports.index = async (req, res, next) => {
    const data = await product.list();
    res.render('product/index', { data })
};

exports.add = (req, res, next) => {
    res.render('product/add');
};

exports.addPost = async (req, res, next) => {
    await product.add(req.body);
    res.redirect('./');
};

exports.delete = async (req, res, next) => {
    const data = await product.list();
    res.render('product/delete',{ data });
};

exports.deleteProduct = async (req, res, next) => {
    const id = req.params['id'];
    await product.delete(id);
    res.redirect('../delete');
};

exports.update = async (req, res, next) => {
    const data = await product.list();
    res.render('product/update',{ data });
};

exports.edit = async (req, res, next) => {
    const id = req.params['id'];
    const data = await product.detail(id);
    res.render('product/edit',{ data });
};

exports.updatePost = async (req, res, next) => {
    const id = req.params['id'];
    await product.update(id,req.body);
    res.redirect('../update');
};