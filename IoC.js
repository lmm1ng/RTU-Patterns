// Регистрация пользователя в интернет магазине

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
class CurrentAvatar {
    constructor() {
        this.href = this.getDefaultAvatar()
    }

    getDefaultAvatar() {
        // Какой-то запрос
        return 'https://192.168.0.76/default.png'

    }
}
class CurrentPromo {
    constructor() {
        this.weekly = this.getWeeklyPromo();
    }
    getWeeklyPromo() {
        // Какой-то запрос
        return {
            product: 'Кастрюля',
            amount: '2000р',
            per: '15%'
        }
    }
}

const user = new User('Вася', 17);
user.sendEmailPromo();
user.getAvatar();
