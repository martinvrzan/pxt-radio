//radio.setFrequencyBand(0) - frequence vysílaní
//radio.setTransmitPower(4) - síla vysílacího signálu
//radio.setGroup(1) - skupina na příjmaní a odesílání
//radio.setTransmitSerialNumber(false) - jestli má zobrazit seriové číslo-identifikace odsilatele

//radio.sendNumber(0) - odešle číslo
//radio.sendValue("name", 0) - odešle znak a hodnotu 
//radio.sendString("") - posíla znaky

//radio.onReceivedNumber(function(receivedNumber: number) {}) - přijme číslo
//radio.onReceivedValue(function(name: string, value: number) {}) - přijme znak i hodnotu
//radio.onReceivedString(function(receivedString: string) {}) - příjme znak

radio.setGroup(28)
Sensors.SetLightLevel()
radio.setTransmitPower(7)

let start: boolean = false
let end: boolean = false
let cas: number = 0

Sensors.OnLightDrop(function () {
    if (!start) {
        radio.sendNumber(1)
        start = true
        basic.showNumber(1)
    }
})

radio.onReceivedValue(function (time: string, ftime: number) {
    if (start) {
        console.log(ftime)
        basic.showNumber(ftime)
        cas = ftime
    }
})

input.onButtonPressed(Button.A, function () {
    Sensors.SetLightLevel()
    basic.showNumber(cas)
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    start = false
    basic.showString("X")
    Sensors.SetLightLevel()
    music.playTone(600, 200)
    basic.clearScreen()
})

input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    start = false
    Sensors.SetLightLevel()
    music.playTone(150, 200)
    basic.clearScreen()
})



