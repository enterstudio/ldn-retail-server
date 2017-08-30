'use strict';
var socket = require('../../config/socketio');

exports.userInRange = function (req, res) {

    var userData = req.body;

    console.log('received user data: ' , userData);

    socket.send('USER_IN_RANGE', userData);

    //push event to client and change the screen
    return res.status(200).json('details received');

};