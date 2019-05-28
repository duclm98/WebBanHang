const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

module.exports.list = async () => {
    return await dbs.production.collection('users').find({})
      .toArray();
  };