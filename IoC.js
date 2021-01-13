// Регистрация пользователя в интернет магазине

import {CurrentAvatar, CurrentPromo} from "./IoC_server.js";

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.promo = new CurrentPromo();
        this.avatar = new CurrentAvatar();
    }
    sendEmailPromo() {
        console.log(`Уважаемый покупатель!
        На этой неделе для вас действует персональная акция!
        ${this.promo.weekly.product} со скидкой ${this.promo.weekly.per} по цене ${this.promo.weekly.amount}.
        Спешите преобрести!`)
    }
    getAvatar() {
        console.log(`Ссылка на аватарку пользователя ${this.name} (${this.age} лет): ${this.avatar.href}`)
    }
}


const user = new User('Вася', 17);
user.sendEmailPromo();
user.getAvatar();
