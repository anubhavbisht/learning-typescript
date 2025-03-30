export class MyPin {
    lat: number = 0
    long: number = 0
    relocate = (x: number, y: number) => {
        this.lat = x
        this.long = y
    }
}

const pin = new MyPin()
pin.relocate(100, 100)