const express = require('express');

const router = express();

const userInfo_handler = require('../router_handler/userInfo');


//personal data
router.get('/userInfo', userInfo_handler.userInfo);



module.exports = router;
