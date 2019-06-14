var express = require('express');
var router = express.Router();
const user = require('../controllers/users');

router.get('/', user.list );

router.get('/lock_list', user.lock_list );
router.get('/lock/:id', user.lock );

router.get('/unlock_list', user.unlock_list );
router.get('/unlock/:id', user.unlock );

module.exports = router;
