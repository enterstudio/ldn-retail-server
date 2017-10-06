var config = {

    SOCKET_IO_ADDRESS: 'localhost',
    SOCKET_IO_PORT: 3000

}


function initIOSocket() {

    var imgSrc =  'plane';

    let socket = io(config.SOCKET_IO_ADDRESS + ':' + config.SOCKET_IO_PORT,
        {
            timeout: 3,
            reconnectionAttempts: 4
        });

    socket.on('connect', function (error) {
        console.log('Connected to io server');
    });

    socket.on('connect_timeout', function (error) {
        console.error('Connection to io server failed');
    });

    socket.on('USER_IN_RANGE', function (data) {
        console.log('USER_IN_RANGE: ', data);
        imgSrc = imgSrc === 'plane' ? 'plane-promotion' : 'plane';
        document.body.style.background = 'url(assets/'+ imgSrc  +'.png) no-repeat';
        document.body.style.backgroundSize = 'cover';
    });

    socket.on('disconnect', function () {
        console.error("Disconnected from Socket");
    });
}


window.onload = function() {
      initIOSocket();
};


