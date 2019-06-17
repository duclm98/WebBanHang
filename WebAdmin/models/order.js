const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
    const results = await dbs.production.collection('orders').find({_id: ObjectId(id)})
      .toArray();
    return results[0];
};
exports.detail = detail;

module.exports.delivered = async () => {
    return results = await dbs.production.collection('orders').find({trangThai:true})
        .toArray();
};

module.exports.delivery = async () => {
    return results = await dbs.production.collection('orders').find({trangThai:false})
        .toArray();
};

module.exports.update = async (id) => {
    return await dbs.production.collection('orders').updateOne({ _id: ObjectId(id)},{$set: {trangThai:true}});
  };