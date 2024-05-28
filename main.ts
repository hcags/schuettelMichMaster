radio.onReceivedNumber(function (receivedNumber) {
    currentLives = gamerLives[receivedNumber]
    if (currentLives > 0) {
        currentLives += -1
        gamerLives[receivedNumber] = currentLives
    }
    led.unplot(receivedNumber - 1, currentLives)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(gameStart)) {
        radio.sendNumber(difficult)
        gameStart = true
        backTimer = 5
        basic.showNumber(backTimer)
        basic.pause(1000)
        music.playTone(523, music.beat(BeatFraction.Whole))
        while (backTimer > 0) {
            backTimer += -1
            basic.showNumber(backTimer)
            basic.pause(1000)
            if (backTimer > 0) {
                music.playTone(523, music.beat(BeatFraction.Whole))
            }
        }
        radio.sendString("gameStart")
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playTone(698, music.beat(BeatFraction.Double))
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (!(gameStart)) {
        difficult += 1
        if (difficult > 3) {
            difficult = 1
        }
        basic.showNumber(difficult)
    }
})
let backTimer = 0
let currentLives = 0
let gamerLives: number[] = []
let gameStart = false
let difficult = 0
difficult = 1
gameStart = false
radio.setGroup(1)
gamerLives[1] = 5
gamerLives[2] = 5
gamerLives[3] = 5
gamerLives[4] = 5
gamerLives[5] = 5
basic.showNumber(difficult)
