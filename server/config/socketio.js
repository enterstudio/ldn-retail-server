"use strict";

var io = require("socket.io");
var assert = require("assert");
var config = require('./environment');

class Socket {

  constructor(){
    var allowedOrigins = "*:".concat(config.port);
    this.socketIO = io(config.ioPort, {
      origins: allowedOrigins
    });
    this.startListening();
  }

  startListening() {
    assert.ok(this.socketIO !== null, "socketIO instance must be initialized first");
    this.socketIO.on('connection', socket => {
      console.log("IO client connected: " + socket.client.conn.id);
    });
    console.log("Listening for IO client connections.");
  }


  send(eventName, data) {
    assert.ok(this.socketIO !== null, "socketIO instance must be initialized first");
    this.socketIO.emit(eventName, data);
  }

}

module.exports = new Socket();
