var five = require("johnny-five");
var board = new five.Board({ port: 'COM4' });
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');


client.on('connect', function () {
  client.subscribe('teste-sussa');
  client.publish('teste-sussa', 'Hello mqtt');
  console.log('Conectado!');
  board.on("ready", function () {

    // Create a standard `led` component instance
    var led = new five.Led(13);
    var isGateOpened = false;
    var button = new five.Button(2);

    var servo = new five.Servo({
      pin: 4,
      range: [0, 90]
    });

    button.on("down", function () {
      console.log("down");

    });

    client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString());
      client.end();
    });
  });

});
