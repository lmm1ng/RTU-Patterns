getRandomInt = max => Math.floor(Math.random() * Math.floor(max));


class InternetShop {
    item;
    sell(itemName) {
        this.item = itemName;
        this.acceptOrder();
        this.checkInWarehouse();
        this.notifyBuyer();
        this.findСourier();
    }
}

class Ozon extends InternetShop {
    acceptOrder() {
        console.log(`Ozon принял заказ: №${getRandomInt(1000)}-${this.item}`)
    }
    checkInWarehouse() {
        console.log(`На складе №${getRandomInt(10)} есть этот товар.`)
    }
    notifyBuyer() {
        console.log(`Написать покупателю: Добрый день. Ваш заказ оформлен и готов к отправке. С уважением, Ozon.`)
    }
    findСourier() {
        console.log(`Написать курьеру: Необходимо доставить ${this.item}. За подробностями обращаться по горячей линии.`)
    }
}

class Wildberries extends InternetShop {
    acceptOrder() {
        console.log(`Wildberries принял заказ: №${getRandomInt(1000)}-${this.item}`)
    }
    checkInWarehouse() {
        console.log(`На складе №${getRandomInt(100)} есть этот товар.`)
    }
    notifyBuyer() {
        console.log('Написать покупателю: Здравствуйте! Ваш заказ оформлен и готов к отправке. Доставим в течении 3 рабочих дней. C уважением, Wildberries.');
    }
    findСourier() {
        console.log(`Написать курьеру: Необходимо доставить ${this.item}. Подробнее - в мобильном приложении.`)
    }
}

const ozon = new Ozon();
const wildberries = new Wildberries();

ozon.sell('Стул');
wildberries.sell(`Футболка "Nike"(s)`)