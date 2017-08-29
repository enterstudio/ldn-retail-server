'use strict';

var express = require('express');
var service = require('./beacon.service');

var router = express.Router();

router.post('/', service.userInRange);

module.exports = router;