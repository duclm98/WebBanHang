const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

module.exports.add = async (admin) => {
    return await dbs.production.collection('admins').insertOne(admin);
  };

  module.exports.list = async () => {
    return results = await dbs.production.collection('admins').find()
      .toArray();
};