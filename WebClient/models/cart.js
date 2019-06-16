const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');
const CARTS = 'carts'

module.exports.add = async (email, idProduct) => {
    return await dbs.production.collection(CARTS).insertOne({email, idProduct});
};

module.exports.list = async (email) => {
    return await dbs.production.collection(CARTS).find({email}).toArray();
};

const count = async(email) => {
    return await dbs.production.collection('products').find({email}).count();
}
exports.count=count;