class Fridge {
    constructor() {
        this.price = 10000;
    }

    getPrice() {
        return this.price
    }
}

class addFreezer {
    constructor(fridge) {
        this.fridge = fridge
    }

    getPrice() {
        return this.fridge.getPrice() + 6000;
    }
}

class addDualFrost {
    constructor(fridge) {
        this.fridge = fridge
    }

    getPrice() {
        return this.fridge.getPrice() + 3000;
    }
}

let fridge = new Fridge();

fridge = new addFreezer(fridge);
fridge = new addDualFrost(fridge);

console.log(fridge.getPrice());


