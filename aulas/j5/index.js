/*const five = require("johnny-five");
var board = new five.Board({
  port: "COM3"
});

board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);
  this.repl.inject({
	  batatinha: led
  });
});
*/
const five = require("johnny-five");
var board = new five.Board({
  port: "COM3"
});

board.on("ready", function() {
  const qtdeLEDs = 10;
  const pinosLed = [2,3,4,5,6,7,8,9,10,11];
  const pinoPotenc = 0;
  var valorPotenciometro = 0;
  var bargraph = 0;

  var leds = pinosLed.map(function(pin) {
    return new five.Led(pin);
  });

  var potenciometro = new five.Sensor(pinoPotenc);
  var ateQuantoAcender = potenciometro.scaleTo([0,10]);


  potenciometro.on("change", function() {

  });
});

void loop() {
  potenciometro = analogRead(pinoPotenc);
  bargraph = map(potenciometro,0,1023,0,10);
  for (var i=0; i<=qtdeLEDs; i++) {
    if (i < bargraph) {
      digitalWrite(pinosLEDs[i], HIGH);
    }
    else {
      digitalWrite(pinosLEDs[i],LOW);
    }
  }
}

/*const int qtdeLEDs = 10;
const int pinosLEDs[] = {2,3,4,5,6,7,8,9,10,11};
const int pinoPotenc = 0;
int potenciometro = 0;
int bargraph = 0;
void setup() {
  for (int i=0; i<=qtdeLEDs; i++) {
    pinMode(pinosLEDs[i], OUTPUT);
  }
}
void loop() {
  potenciometro = analogRead(pinoPotenc);
  bargraph = map(potenciometro,0,1023,0,10);
  for (int i=0; i<=qtdeLEDs; i++) {
    if (i < bargraph) {
      digitalWrite(pinosLEDs[i], HIGH);
    }
    else {
      digitalWrite(pinosLEDs[i],LOW);
    }
  }
}*/