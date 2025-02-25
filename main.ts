input.onButtonPressed(Button.A, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 180)
    basic.pause(500)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(2000)
    SuperBit.Servo2(SuperBit.enServo.S1, 60)
    basic.pause(500)
    SuperBit.Servo2(SuperBit.enServo.S1, 120)
    basic.pause(500)
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 180)
})
radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (0 == 0) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 60)
})
let item = ""
basic.showIcon(IconNames.Happy)
SuperBit.Servo2(SuperBit.enServo.S1, 120)
