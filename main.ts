input.onButtonPressed(Button.B, function () {
    score = 6
})
input.onPinPressed(TouchPin.P1, function () {
    score += -1
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Sad)
})
let score = 0
score = 6
basic.forever(function () {
    basic.showNumber(score)
    if (score == 0) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showString("GAME OVER!")
    }
})
