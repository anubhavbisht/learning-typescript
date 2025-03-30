export class MyPin {
    lat;
    long;
    constructor(location?: { lat: number, long: number }) {
        this.lat = location?.lat ?? 0
        this.long = location?.long ?? 0
    }
    relocate = (x: number, y: number) => {
        this.lat = x
        this.long = y
    }
}

const pin = new MyPin({ lat: 50, long: 50 })
pin.relocate(100, 100)