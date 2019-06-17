const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');
const ORDERS = 'orders'

const detail = async (id) => {
    const results = await dbs.production.collection(ORDERS).find({_id: ObjectId(id)})
      .toArray();
    return results[0];
};

module.exports.add = async (order) => {
    return await dbs.production.collection(ORDERS).insertOne(order);
};

module.exports.list = async (email) => {
    return await dbs.production.collection(ORDERS).find({email}).toArray();
};

module.exports.delete = async (id) => {
    return await dbs.production.collection(ORDERS).deleteOne({ _id: ObjectId(id)});
};

module.exports.updateAddress = async (id,nguoiNhan,sdtNguoiNhan,diaChiNhan) => {
    return await dbs.production.collection(ORDERS).updateOne({ _id: ObjectId(id)},{$set: {nguoiNhan,sdtNguoiNhan,diaChiNhan}});
};

exports.detail = detail;