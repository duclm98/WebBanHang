const users = require('../../models/users');

exports.check = async (req, res, next) => {
  const userExist = await users.check(req.query.email);
  console.log(userExist);
  res.json(userExist);
};