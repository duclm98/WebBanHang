const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
    const results = await dbs.production.collection('orders').find({_id: ObjectId(id)})
      .toArray();
    return results[0];
};
exports.detail = detail;

module.exports.list = async () => {
    return results = await dbs.production.collection('orders').find({trangThai:true})
        .toArray();
};