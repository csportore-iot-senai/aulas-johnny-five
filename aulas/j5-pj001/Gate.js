class Gate {

    constructor(servo) {
        this.servo = servo;
        this.startingAngle = 0;
        this.finishingAngle = 90;
        this.isOpened = false;
    }

    get isOpened() {
        return this.isOpened;
    }

    open() {
        servo.to(finishingAngle, 1 * 1000);
        this.isGateOpened = false;
    }

    close() {
        servo.to(startingAngle, 1 * 1000);
        this.isGateOpened = true;
    }
}