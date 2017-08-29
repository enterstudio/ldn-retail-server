'use strict';

module.exports = function (app) {

    app.use('/api/beacon', require('./api/beacon'));

    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function (req, res) {
            res.sendFile(app.get('appPath') + '/index.html');
        });

};