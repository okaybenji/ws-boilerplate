const ws = new WebSocket('ws://localhost:8080');

ws.onopen = function() {
  ws.send('something');
};

ws.onmessage = function(data, flags) {
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
};

/*
// using Browserify, the code could be written as:
const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function(data, flags) {
  // do something
});
*/