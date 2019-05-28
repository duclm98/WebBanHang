var express = require('express');
var router = express.Router();
const users = require('../controllers/users');

router.get('/', users.signIn);
router.post('/', users.signInPost);

router.get('/signUp', users.signUp);
router.post('/signUp', users.signUpPost);

module.exports = router;
