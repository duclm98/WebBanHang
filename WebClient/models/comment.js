const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');
const COMMENTS = 'comments'

module.exports.add = async (comment) => {
    return await dbs.production.collection(COMMENTS).insertOne(comment);
};

module.exports.list = async () => {
    return await dbs.production.collection(COMMENTS).find().toArray();
};

module.exports.count = async () => {
    return await dbs.production.collection(COMMENTS).find().count();
};