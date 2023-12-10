let odleglosc = 0
basic.forever(function () {
    if (input.lightLevel() > 0) {
        BitCar.stop()
    } else {
        odleglosc = BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.cm)
        if (odleglosc < 20) {
            BitCar.move(-20, -20)
        } else if (odleglosc > 20 && odleglosc < 30) {
            BitCar.move(20, 0)
        } else if (odleglosc > 30) {
            BitCar.move(20, 20)
        }
    }
})
