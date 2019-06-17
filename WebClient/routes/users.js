var express = require('express');
const passport = require('passport');
var router = express.Router();
const users = require('../controllers/users');

router.get('/signUp', users.signUp);
router.post('/signUp', users.signUpPost);

router.get('/login', users.loginGet);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
}));

router.get('/logout', users.logout);

router.get('/info', users.info);

router.get('/edit', users.edit);
router.post('/edit', users.editPost);

module.exports = router;
