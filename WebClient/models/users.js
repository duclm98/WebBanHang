const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');
const bcrypt = require('bcrypt');
const USERS = 'users';
const SALT_ROUNDS = 10;
/**
 *
 * @param username
 * @param password
 * @return user
 */

const detail = async (id) => {
    const results = await dbs.production.collection(USERS).find({_id: ObjectId(id)})
      .toArray();
    return results[0];
};
exports.detail = detail;

module.exports.list = async () => {
  return results = await dbs.production.collection(USERS).find()
    .toArray();
};

module.exports.add = async (user) => {
  return await dbs.production.collection(USERS).insertOne(user);
};

const get = async (email) => {
  return await dbs.production.collection(USERS).findOne({email});
};
exports.get = get;

exports.verify = async (username, password) => {
  const user = await dbs.production.collection(USERS).findOne({email: username})
  if (user)
    return undefined;
  // verify password
  // ...
  return results[0];
};

exports.validPassword = async (email, password) => {
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await get(email);
  if (!user)
    return false;
  return await bcrypt.compare(password, user.password);
};

const check = async (email) => {
  const user = await dbs.production.collection(USERS).findOne({email});
  if (user)
    return true;
  return false;
};
exports.check = check;

module.exports.update = async (email,user) => {
  return await dbs.production.collection(USERS).updateOne({email},{$set: user});
};