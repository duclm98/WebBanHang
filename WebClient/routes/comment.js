var express = require('express');
const passport = require('passport');
var router = express.Router();
const comment = require('../controllers/comment');

router.post('/add/:id', comment.addPost);

module.exports = router;
