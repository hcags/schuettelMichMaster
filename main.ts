radio.onReceivedNumber(function (receivedNumber) {
    currentLives = gamerLives[receivedNumber]
    if (currentLives > 0) {
        currentLives += -1
        gamerLives[receivedNumber] = currentLives
    }
    led.unplot(receivedNumber - 1, currentLives)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    let gameStart = 0
    if (!(gameStart)) {
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
let backTimer = 0
let currentLives = 0
let gamerLives: number[] = []
radio.setGroup(1)
gamerLives[1] = 5
gamerLives[2] = 5
gamerLives[3] = 5
gamerLives[4] = 5
gamerLives[5] = 5
basic.showIcon(IconNames.Asleep)
