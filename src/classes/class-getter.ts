export class MyPin {
    private lat: number;
    private long: number;
    constructor(location?: { lat: number, long: number }) {
        this.lat = location?.lat ?? 0
        this.long = location?.long ?? 0
    }
    get coordinates() {
        return {
            lat: this.lat,
            long: this.long
        }
    }
    set coordinates(location) {
        this.lat = location.lat
        this.long = location.long
    }
    relocate = (x: number, y: number) => {
        this.lat = x
        this.long = y
    }
}

const pin = new MyPin({ lat: 50, long: 50 })
const latitude = pin.coordinates.lat
const longitude = pin.coordinates.long
pin.coordinates = {lat: -50, long: -50}
pin.relocate(100, 100)