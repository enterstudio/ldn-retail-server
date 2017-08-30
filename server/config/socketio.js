"use strict";

var io = require("socket.io");
var assert = require("assert");
var config = require('./environment');

class Socket {

  /**
   * Create socket.io instance, start listening
   */
  constructor(){
    this.socketIO = io(config.ioPort, "socketIO");
    this.startListening();
  }

  /**
   * Establish/init communication channel for clients
   */
  startListening() {
    assert.ok(this.socketIO !== null, "socketIO instance must be initialized first");
    this.socketIO.on('connection', socket => {
      console.log("client connected: " + socket.client.conn.id);
    });
    console.log("Listening for IO client connections.");
  }

  /**
   * Send event data by emitting the Morpho-Watcher server's main event
   * @param data {Object} any data to be sent to observer clients
   */
  send(data, eventName) {
    assert.ok(this.socketIO !== null, "socketIO instance must be initialized first");
    this.socketIO.emit(eventName, data);
  }

}

module.exports = Socket;
