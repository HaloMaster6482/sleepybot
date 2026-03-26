input.onSound(DetectedSound.Loud, function () {
    Wakeup = true
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P0, 40)
        basic.pause(150)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(150)
    }
    Wakeup = false
})
let Wakeup = false
input.setSoundThreshold(SoundThreshold.Loud, 210)
let SleepAngle = 60
let SleepDir = 1
pins.servoWritePin(AnalogPin.P0, SleepAngle)
basic.forever(function () {
    if (!(Wakeup)) {
        pins.servoWritePin(AnalogPin.P0, SleepAngle)
        SleepAngle += SleepDir
    }
    if (SleepAngle >= 80 || SleepAngle <= 60) {
        SleepDir = 0 - SleepDir
    }
    basic.pause(100)
})
