export class CurrentAvatar {
    constructor() {
        this.href = this.getDefaultAvatar()
    }

    getDefaultAvatar() {
        return 'https://192.168.0.76/default.png'
    }
}
export class CurrentPromo {
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