class Iterator {
    constructor(array) {
        this.array = array;
        this.currentIndex = -1;
    }

    goNext() {
        if( this.currentIndex < this.array.length) {
            this.currentIndex++;
            return this.array[this.currentIndex];
        } else {
            return null;
        }
    }
    goPrev() {
        if(this.currentIndex > 0) {
            this.currentIndex--;
            return this.array[this.currentIndex];
        } else {
            return null
        }
    }
}

const getRandomInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

const generateMessageGamingStore = () => {
    const salePercent = [25, 50, 70, 80];
    const items = ['Монитор LG', 'Видеокарта Nvidia', 'Игровое кресло Aerocool', 'Клавиатура Razer'];
    return `Уважаемый клиент, в настоящий момент в нашем магазине акция! 
        ${items[getRandomInt(0, 3)]} со скидкой ${salePercent[getRandomInt(0, 3)]}%!
        Успейте приобрести! Подробнее на сайте на нашем сайте`;
}

const generateMessageBeautyStore = () => {
    const salePercent = [25, 50, 70, 80];
    const items = ['Помада', 'Тушь', 'Блеск', 'Шампунь'];
    return `Уважаемый клиент, в настоящий момент в нашем магазине акция! 
        ${items[getRandomInt(0, 3)]} со скидкой ${salePercent[getRandomInt(0, 3)]}%!
        Успейте приобрести! Подробнее на сайте на нашем сайте`;
}

const generateMessageFurnitureStore = () => {
    const salePercent = [25, 50, 70, 80];
    const items = ['Шкаф', 'Стол', 'Стул', 'Кресло'];
    return `Уважаемый клиент, в настоящий момент в нашем магазине акция! 
        ${items[getRandomInt(0, 3)]} со скидкой ${salePercent[getRandomInt(0, 3)]}%!
        Успейте приобрести! Подробнее на сайте на нашем сайте`;
}

class User {
    constructor() {
        this.messages = []
    }
    getMessages () {
        console.log(this.messages);
    }
    sendMessage (message) {
        this.messages.push(message);
    }
}

class Store {
    constructor() {
        this.users = [];
    }

    subscribe(user) {
        if (this.users.includes(user)) {
            console.log('Данный пользователь уже подключен к рассылке');
        } else {
            this.users.push(user);
        }
        return this;
    }

    createNewOffer(offer) {
        if (offer) {
            this.users.forEach(user => user.sendMessage(offer));
        } else {
            console.log('Предложения закончились!!!')
        }
    }

}

generateDataFor = (store) => {
    let output = [];
    switch (store) {
        case 'furniture':
            for (let i = 0; i < 10; i++) {
                output.push(generateMessageFurnitureStore());
            }
            break
        case 'beauty':
            for (let i = 0; i < 10; i++) {
                output.push(generateMessageBeautyStore());
            }
            break
        case 'gaming':
            for (let i = 0; i < 10; i++) {
                output.push(generateMessageGamingStore());
            }
            break
    }
    return output;
}

const user1 = new User();
const user2 = new User();

const gamingStore = new Store();
const beautyStore = new Store()

const gamingStoreOffersIterator = new Iterator(generateDataFor('gaming'))
const beautyStoreOffersIterator = new Iterator(generateDataFor('beauty'))

gamingStore.subscribe(user1).subscribe(user2);
beautyStore.subscribe(user2);

gamingStore.createNewOffer(gamingStoreOffersIterator.goNext());
beautyStore.createNewOffer(beautyStoreOffersIterator.goNext())

user1.getMessages();
user2.getMessages();