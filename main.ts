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
radio.setFrequencyBand(0)
radio.setTransmitPower(4)

enum STAV {
    ready,
    run,
    finish,
}
Sensors.SetLightLevel()

let mode: STAV = STAV.ready as STAV


if (mode === STAV.finish) {

}
Sensors.OnLightDrop(function () {
    if (mode === STAV.ready) {
        music.playTone(500, 400)
        radio.sendString("start")
        
        if (radio.sendString("start")) { let mode: STAV = STAV.run as STAV }
    }
})


