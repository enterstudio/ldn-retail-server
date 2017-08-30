'use strict';

exports.userInRange = function (req, res) {

    var userData = req.body;

    console.log('received user data: ' , userData);

    //push event to client and change the screen
    return res.status(200).json('details received');

};