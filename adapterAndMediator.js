class UsbFlash {
    constructor(data) {
        this.data = data;
    }
    plugUSB () {
        return this.data;
    }
}

class MicroSdFlash {
    constructor(data) {
        this.data = data;
    }
    plugToInterfaceAndRead() {
        return this.data;
    }
}

class CardReader {
    constructor(flash) {
        this.flash = flash;
    }
    plugUSB() {
        return  this.flash.plugToInterfaceAndRead();
    }
}

class User {
    constructor(flash, pcMediator) {
        this.flash = flash;
        this.pcMediator = pcMediator;
    }
    getDocs () {
        return `I have got: ${this.pcMediator.convertPDF(this.flash.plugUSB())}`
    }
}

class PC {
    convertPDF (data) {
        return `file.pdf, that contains "${data}"`
    }
}

const usbFlash = new UsbFlash('hello');
const microSDflash = new MicroSdFlash('world');

const cardReader = new CardReader(microSDflash);

const pc = new PC();
const user1 = new User(cardReader, pc);
const user2 = new User(usbFlash, pc);

console.log(user1.getDocs());
console.log(user2.getDocs());




