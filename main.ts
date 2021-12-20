let Areay = 0
let X = 0
let Y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        Areay = randint(0, 30)
        if (Areay == 1) {
            X = 0
            Y = 0
            led.plot(X, Y)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
	
})
