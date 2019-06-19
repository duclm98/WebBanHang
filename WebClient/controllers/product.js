const product = require('../models/product');
const comment = require('../models/comment');
const productInPage = 12;

exports.list = async (req, res, next) => {
    const data = await product.list();
    res.render('product/list', {data,title:"Cửa hàng",user: req.user}); 
};

exports.category = async (req, res, next) => {
    const loai = req.params['loai'];
    const index = Number(req.query.Page);
    var data=[];
    var count=0;
    var title="";
    if(loai == "Apple" || loai == "Samsung")
    {
        data = await product.category(loai,productInPage,index-1);
        count = await product.count1(loai);
        title = loai;
    }
    if(loai == "All")
    {
        data = await product.list1(productInPage,index-1);
        count = await product.count();
        title = "Cửa hàng";
    }
    const data1=[{
        NumOfPage: Number,
        cate:String
    }]; 
    for(var i = 0;i<count/productInPage;i++)
    {
        data1[i]={
            NumOfPage:i+1,
            cate:req.params['loai']
        }
    }
    res.render('product/list', {data,data1,index,title,user: req.user});
};

exports.info = async (req, res, next) => {
    const id = req.params['id']; 
    const data = await product.detail(id);//Chi tiết sản phẩm
    const data1 = await product.category1(data.loai);//Các sản phẩm liên quan
    const COMMENTS = await comment.list(id);
    const COUNT = await comment.count(id);
    res.render('product/info', {data,data1,COMMENTS,COUNT,user: req.user}); 
}; 

exports.search = async (req, res, next) => {
    const key =req.params['key']; 
    const index = Number(req.query.Page);
    const data = await product.search(key,productInPage,index-1);
    const count = await product.countSearch(key);
    const data1=[{
        NumOfPage: Number,
        key:String
    }]; 
    for(var i = 0;i<count/productInPage;i++)
    {
        data1[i]={
            NumOfPage:i+1,
            key:key
        }
    }
    res.render('product/list', {data,data1,index,title:"Tất cả",user: req.user});
}; 

exports.searchPost = async (req, res, next) => {
    const key =req.body.key;//Lấy key từ input
    const index = Number(req.query.Page);
    const data = await product.search(key,productInPage,index-1);
    const count = await product.countSearch(key);
    const data1=[{
        NumOfPage: Number,//chỉ số trang
        key:String//từ khóa cần tìm
    }]; 
    for(var i = 0;i<count/productInPage;i++)
    {
        data1[i]={
            NumOfPage:i+1,
            key:key
        }
    }
    res.render('product/list', {data,data1,index,title:"Tất cả",user: req.user});
};  