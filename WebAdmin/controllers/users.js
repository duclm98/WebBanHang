const user = require('../models/users');

exports.list = async (req, res, next) => {
    const data = await user.list();
    res.render('users/list', { data })
};