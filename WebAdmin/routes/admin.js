const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');

router.get('/signUp', admin.signUp);
router.post('/signUp', admin.signUpPost);

router.get('/signIn', admin.signIn);
router.post('/signIn', admin.signInPost);

module.exports = router;