const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('users').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};
exports.detail = detail;

const user_lock = async (id) => {
  const results = await dbs.production.collection('lockUsers').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};
exports.user_lock = user_lock;

module.exports.list = async () => {
    return await dbs.production.collection('users').find({})
      .toArray();
};

module.exports.add = async (user) => {
  return await dbs.production.collection('users').insertOne(user);
};

module.exports.delete = async (id) => {
  return await dbs.production.collection('users').deleteOne({ _id: ObjectId(id)});
};

module.exports.listLock = async () => {
  return await dbs.production.collection('lockUsers').find({})
    .toArray();
};

module.exports.addLock = async (user) => {
  return await dbs.production.collection('lockUsers').insertOne(user);
};

module.exports.deleteLock = async (id) => {
  return await dbs.production.collection('lockUsers').deleteOne({ _id: ObjectId(id)});
};