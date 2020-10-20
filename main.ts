let Roll = 0
let Pitch = 0
basic.forever(function () {
    Roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    led.plotBarGraph(
    Roll,
    180
    )
    basic.pause(500)
    Pitch = input.rotation(Rotation.Pitch)
    basic.clearScreen()
    led.plotBarGraph(
    Pitch,
    180
    )
    basic.pause(500)
})
