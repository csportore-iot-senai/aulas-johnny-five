var five = require("johnny-five");
var count = 0;
var board = new five.Board({
  port: 'COM3'
});

var lastReadDistance = 0.0;
var passing = false;
var isWithinErrorMargin = true;
var countPessoa = 0;
var counted = false;
var dontPrint = false;

board.on("ready", function () {
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 13
  });

  proximity.on("change", function () {
    if (this.cm < 20) {

      if (!counted) {
        console.log("Proximity: ");
        console.log("  cm  : ", this.cm);
        console.log("  in  : ", this.in);
        console.log("Pessoa: ");
        console.log(countPessoa++);
        console.log("-----------------");
        counted = true;
        //lastReadDistance = this.cm;
      }

     /*  if (lastReadDistance != 0) {
        if (lastReadDistance > this.cm + 3 ) {
          console.log('...entrando');
          countPessoa++;
          lastReadDistance = 0;
        } else if (lastReadDistance < this.cm - 3 ) {
          console.log('...saindo');
          countPessoa--;
          lastReadDistance = 0;
        }
      } */
      
    } else {
      counted = false;
    }
  });
});

function calculateErrorMargin(currentDistance) {
  return (currentDistance - lastReadDistance) > -2.0 || (currentDistance - lastReadDistance) < 2.0;
}