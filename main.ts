input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (!(gameStart)) {
        gameStart = true
        radio.sendString("gameStart")
    }
})
function setLive (gamer: number, Live: number, ledOn: boolean) {
	
}
let gamerLives: number[] = []
let gameStart = false
gameStart = false
radio.setGroup(1)
gamerLives[1] = 5
gamerLives[2] = 5
gamerLives[3] = 5
gamerLives[4] = 5
gamerLives[5] = 5
basic.showIcon(IconNames.Asleep)
