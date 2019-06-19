const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');
const COMMENTS = 'comments'

module.exports.add = async (comment) => {
    return await dbs.production.collection(COMMENTS).insertOne(comment);
};

module.exports.list = async (idSanPham) => {
    return await dbs.production.collection(COMMENTS).find({idSanPham}).toArray();
};

module.exports.count = async (idSanPham) => {
    return await dbs.production.collection(COMMENTS).find({idSanPham}).count();
};