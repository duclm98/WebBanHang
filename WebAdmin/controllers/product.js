const product = require('../models/product');

exports.index =  async (req, res, next) => {
    const data = await product.list();
    res.render('product/index', { data })
};

exports.add = (req, res, next) => {
    res.render('product/add');
};

exports.addPost = async (req, res, next) => {
    const data = {
        ten:req.body.ten,
        loai:req.body.loai,
        ma:req.body.ma,
        soLuong:Number(req.body.soLuong),
        gia:Number(req.body.gia),
        manHinh:req.body.manHinh,
        cpu:req.body.cpu,
        cameraTruoc:req.body.cameraTruoc,
        cameraSau:req.body.cameraSau,
        ram:req.body.ram,
        rom:req.body.rom,
        theNho:req.body.theNho,
        sim:req.body.sim,
        hinhAnh:req.body.hinhAnh
    }
    await product.add(data);
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
    const data = {
        ten:req.body.ten,
        loai:req.body.loai,
        ma:req.body.ma,
        soLuong:Number(req.body.soLuong),
        gia:Number(req.body.gia),
        manHinh:req.body.manHinh,
        cpu:req.body.cpu,
        cameraTruoc:req.body.cameraTruoc,
        cameraSau:req.body.cameraSau,
        ram:req.body.ram,
        rom:req.body.rom,
        theNho:req.body.theNho,
        sim:req.body.sim,
        hinhAnh:req.body.hinhAnh
    }
    await product.update(id,data);
    res.redirect('../update');
};