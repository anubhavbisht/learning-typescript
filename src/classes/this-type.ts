function relocate(this: { lat: number, long: number }, lat: number, long: number) {
    this.lat = lat
    this.long = long
}

const coordinates = {
    lat: 0,
    long: 0,
    relocate,
}

coordinates.relocate(10, 10)

// same thing can't be done with arrow function as this in arrow
// function gets binded to class and same not possible with object

// also if you move this function relocate inside same object
// you don't need to annotate this inside arguments