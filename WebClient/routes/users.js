var express = require('express');
const passport = require('passport');
var router = express.Router();
const users = require('../controllers/users');

router.get('/signUp', users.signUp);
router.post('/signUp', users.signUpPost);

router.get('/signIn', users.signIn);
router.post('/signIn', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/signIn'
}));

router.get('/signOut', users.logout);

module.exports = router;
