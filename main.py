def joystick():
    global x, y, z, rxy, colatz, longiz, x1z, y1z
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    rxy = Math.sqrt(x * x + y * y)
    colatz = Math.atan2(rxy, 0 - z)
    colatz = min(colatz / maxColat, 1)
    longiz = Math.atan2(y, x)
    x1z = colatz * Math.cos(longiz)
    y1z = colatz * Math.sin(longiz)
    return [x1z, y1z]
def image():
    global row00, row01, row02, row03, row04, row05, row06, row07, row08, row09, row10, row11, row12, row13, row14, row15, row16, row17, row18, row19
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
    return [row00,
        row01,
        row02,
        row03,
        row04,
        row05,
        row06,
        row07,
        row08,
        row09,
        row10,
        row11,
        row12,
        row13,
        row14,
        row15,
        row16,
        row17,
        row18,
        row19]
x2 = 0
y2 = 0
joyposition: List[number] = []
row19: List[number] = []
row18: List[number] = []
row17: List[number] = []
row16: List[number] = []
row15: List[number] = []
row14: List[number] = []
row13: List[number] = []
row12: List[number] = []
row11: List[number] = []
row10: List[number] = []
row09: List[number] = []
row08: List[number] = []
row07: List[number] = []
row06: List[number] = []
row05: List[number] = []
row04: List[number] = []
row03: List[number] = []
row02: List[number] = []
row01: List[number] = []
row00: List[number] = []
y1z = 0
x1z = 0
longiz = 0
colatz = 0
rxy = 0
z = 0
y = 0
x = 0
maxColat = 0
the_image = image()
pi025 = Math.atan2(1, 1)
maxColat = pi025 * 1.5
angleFactor = pi025 / 45

def on_forever():
    global joyposition, x, y, y2, x2
    basic.pause(50)
    joyposition = joystick()
    x = joyposition[0] * -20 + 8
    y = joyposition[1] * -20 + 8
    for y1 in range(5):
        y2 = y + y1
        if y2 >= 0 and y2 < 20:
            for x1 in range(5):
                x2 = x + x1
                if x2 >= 0 and x2 < 20:
                    led.plot_brightness(x1, y1, the_image[Math.floor(y2)][Math.floor(x2)] * 255)
                else:
                    led.unplot(x1, y1)
        else:
            for x12 in range(5):
                led.unplot(x12, y1)
basic.forever(on_forever)
