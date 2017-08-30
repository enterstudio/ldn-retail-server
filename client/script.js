
var socket = io('http://localhost:9000');
socket.on('UserInRange', function (data) {
    console.log(data);

    window.querySelector('.io-test').innerHTML = "data received" + data;
});
