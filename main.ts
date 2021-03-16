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
let pix = 0
let pix11 = 0
let pix10 = 0
let pix01 = 0
let pix00 = 0
let x2 = 0
let y2 = 0
let dy = 0
let dx = 0
let iy = 0
let ix = 0
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
    basic.pause(50)
    joyposition = joystick()
    x = joyposition[0] * -20 + 8
    y = joyposition[1] * -20 + 8
    ix = Math.floor(x)
    iy = Math.floor(y)
    dx = x - ix
    dy = y - iy
    for (let y1 = 0; y1 <= 4; y1++) {
        y2 = iy + y1
        for (let x1 = 0; x1 <= 4; x1++) {
            x2 = ix + x1
            if (y2 >= 0 && y2 < 20 && (x2 >= 0 && x2 < 20)) {
                pix00 = the_image[y2][x2]
            } else {
                pix00 = 0
            }
            if (y2 >= -1 && y2 < 19 && (x2 >= 0 && x2 < 20)) {
                pix01 = the_image[y2 + 1][x2]
            } else {
                pix01 = 0
            }
            if (y2 >= 0 && y2 < 20 && (x2 >= -1 && x2 < 19)) {
                pix10 = the_image[y2][x2 + 1]
            } else {
                pix10 = 0
            }
            if (y2 >= -1 && y2 < 19 && (x2 >= -1 && x2 < 19)) {
                pix11 = the_image[y2 + 1][x2 + 1]
            } else {
                pix11 = 0
            }
            pix00 = pix00 * ((1 - dx) * (1 - dy))
            pix01 = pix01 * ((1 - dx) * dy)
            pix10 = pix10 * (dx * (1 - dy))
            pix11 = pix11 * (dx * dy)
            pix = pix00 + pix01 + pix10 + pix11
            if (pix < 0.5) {
                pix = (pix * 2) ** 2.5 / 2
            } else {
                pix = 1 - ((1 - pix) * 2) ** 2.5 / 2
            }
            led.plotBrightness(x1, y1, pix * 255)
        }
    }
})
