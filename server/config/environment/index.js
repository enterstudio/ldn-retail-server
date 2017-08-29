'use strict';

var path = require('path');

var config = {

    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(__dirname + '/../../..'),

    // Server port
    port: process.env.PORT || 9000



};

module.exports = config;