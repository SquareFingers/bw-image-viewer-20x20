function joystick () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    rxy = Math.sqrt(x * x + y * y)
    colatz = Math.atan2(rxy, 0 - z)
    colatz = Math.min(colatz / maxColat, 1)
    longiz = Math.atan2(y, x)
    x1z = colatz * Math.cos(longiz)
    y1z = colatz * Math.sin(longiz)
    return [x1z, y1z]
}
function image () {
    row00 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    row01 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    row02 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    row03 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    row04 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    row05 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    row06 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    row07 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    row08 = [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0]
    row09 = [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0]
    row10 = [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0]
    row11 = [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0]
    row12 = [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0]
    row13 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    row14 = [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0]
    row15 = [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0]
    row16 = [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0]
    row17 = [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0]
    row18 = [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    row19 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    return [row00, row01, row02, row03, row04, row05, row06, row07, row08, row09, row10, row11, row12, row13, row14, row15, row16, row17, row18, row19]
}
let x2 = 0
let y2 = 0
let joyposition: number[] = []
let row19: number[] = []
let row18: number[] = []
let row17: number[] = []
let row16: number[] = []
let row15: number[] = []
let row14: number[] = []
let row13: number[] = []
let row12: number[] = []
let row11: number[] = []
let row10: number[] = []
let row09: number[] = []
let row08: number[] = []
let row07: number[] = []
let row06: number[] = []
let row05: number[] = []
let row04: number[] = []
let row03: number[] = []
let row02: number[] = []
let row01: number[] = []
let row00: number[] = []
let y1z = 0
let x1z = 0
let longiz = 0
let colatz = 0
let rxy = 0
let z = 0
let y = 0
let x = 0
let maxColat = 0
let the_image = image()
let pi025 = Math.atan2(1, 1)
maxColat = pi025 * 1.5
let angleFactor = pi025 / 45
basic.forever(function () {
    joyposition = joystick()
    x = joyposition[0] * 20 + 8
    y = joyposition[1] * 20 + 8
    for (let y1 = 0; y1 <= 4; y1++) {
        y2 = y + y1
        if (y2 >= 0 && y2 < 20) {
            for (let x1 = 0; x1 <= 4; x1++) {
                x2 = x + x1
                if (x2 >= 0 && x2 < 20) {
                    led.plotBrightness(x1, y1, the_image[Math.floor(y2)][Math.floor(x2)] * 255)
                } else {
                    led.unplot(x1, y1)
                }
            }
        } else {
            for (let x1 = 0; x1 <= 4; x1++) {
                led.unplot(x1, y1)
            }
        }
    }
})
