const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');
const bcrypt = require('bcrypt');
const USERS = 'users';

const detail = async (id) => {
    const results = await dbs.production.collection('products').find({_id: ObjectId(id)})
      .toArray();
    return results[0];
};
exports.detail = detail;

const get = async (email) => {
  return await dbs.production.collection(USERS).findOne({email});
};
exports.get = get;

exports.validPassword = async (email, password) => {
  const user = await get(email);
  if (!user)
    return false;
  return await bcrypt.compare(password, user.password);
};

module.exports.list = async () => {
    return results = await dbs.production.collection(USERS).find()
      .toArray();
};

module.exports.add = async (user) => {
    return await dbs.production.collection(USERS).insertOne(user);
};

const check = async (email) => {
  const user = await dbs.production.collection(USERS).findOne({email});
  if (user)
    return true;
  return false;
};
exports.check = check;