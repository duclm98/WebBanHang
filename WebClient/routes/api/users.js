const express = require('express');
const router = express.Router();
const users = require('../../controllers/api/users');

router.get('/check', users.check);

module.exports = router