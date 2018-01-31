const int ledPin = 8;
const int sensorPin = 12;
int leituraSensor = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(sensorPin, INPUT);

}

void loop() {
  leituraSensor = digitalRead(sensorPin);
  if (leituraSensor != 0) {
    digitalWrite(ledPin , LOW);
    } else {
      digitalWrite(ledPin , HIGH);
      }

}
