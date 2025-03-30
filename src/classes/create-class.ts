export class MyPin {
    readonly lat: number
    readonly long: number

    constructor(x: number, y: number) {
        this.lat = x
        this.long = y
    }
}

const pin = new MyPin(10, 4)
pin.lat = 1
pin.long = 10