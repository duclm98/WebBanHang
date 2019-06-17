const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');
const ORDERS = 'orders'

module.exports.add = async (order) => {
    return await dbs.production.collection(ORDERS).insertOne(order);
};

module.exports.list = async (email) => {
    return await dbs.production.collection(ORDERS).find({email}).toArray();
};