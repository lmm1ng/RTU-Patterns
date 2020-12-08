const getRandomInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

class Room {
    constructor(name, neighbours) {
        this.name = name;
        this.neighbours = neighbours;
        this.checked = false;
        this.isDinnerNeeded = false;
        this.isInFire = false;
    }
}

// Creating rooms

let A = new Room('A')
let B = new Room('B')
let C = new Room('C')
let D = new Room('D')
let E = new Room('E')
let F = new Room('F')
let G = new Room('G')
let H = new Room('H')
let I = new Room('I')
let J = new Room('J')
let K = new Room('K')
let L = new Room('L')
let M = new Room('M')
let N = new Room('N')
let O = new Room('O')
let P = new Room('P')

A.neighbours = [B,I,L];
B.neighbours = [C];
C.neighbours = [D];
D.neighbours = [E,F];
E.neighbours = [G];
F.neighbours = [];
G.neighbours = [H];
H.neighbours = [];
I.neighbours = [J];
J.neighbours = [K];
K.neighbours = [];
L.neighbours = [M];
M.neighbours = [N,O];
N.neighbours = [];
O.neighbours = [P];
P.neighbours = [];

const hotel = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P]

const restRooms = () => {
    hotel.forEach(room => {
        room.checked = false;
        room.isDinnerNeeded = false;
        room.isInFire = false;
    })
}

const applyDinners = () => {
    hotel.forEach(room => {
        room.isDinnerNeeded = Math.random() > 0.5
    })
}

const makeSomeFire = () => {
    const whereIsFire = getRandomInt(1, hotel.length - 1);
    hotel[whereIsFire].isInFire = true;
}

class DinnerDeliveryBlock {
    constructor(start) {
        this.stack = [start]
        this.reached = []
        this.map = []
    }

    goNext() {
        let last = this.stack[this.stack.length - 1]

        if (!last.checked) {
            last.checked = true;
            this.reached.push(last.name)
            if (last.isDinnerNeeded) {
                console.log(`Посетитель из номера ${last.name} заказывал обед`);
                this.map.push(last.name)
            } else {
                console.log(`Посетитель из номера ${last.name} не заказывал обед`);
            }
        }

        for (let neighbour of last.neighbours) {
            if (!neighbour.checked) {
                this.stack.push(neighbour);
                return this.reached;
            }
        }
        this.stack.pop()
    }

    hasNext() {
        return !!this.stack.length
    }
    getDeliveryMap () {
        console.log(this.map)
    }
    getReached() {
        console.log(this.reached)
    }
}

class AlarmBlock {
    constructor(start) {
        this.queue = [start]
        this.reached = []
    }
    goNext() {
        let last = this.queue.shift();

        if (!last.checked) {
            last.checked = true;
            this.reached.push(last.name)
        }

        for (let neighbour of last.neighbours) {
            if (!neighbour.checked) {
                neighbour.checked = true;
                this.reached.push(neighbour.name);
                this.queue.push(neighbour);
                if (neighbour.isInFire) {
                    this.isEnabled = false;
                    neighbour.isInFire = false;
                    console.log(`Пожар потушен в номере ${neighbour.name}`)
                    break
                } else {
                    console.log('Упс... Пожар в этом номере...')
                }
            }
        }
    }
    isEnabled = false;
    // hasNext () {
    //     return  !!this.queue.length
    // }
    getReached() {
        console.log(this.reached)
    }

}

const dinner = new DinnerDeliveryBlock(hotel[0])

applyDinners();

while (dinner.hasNext()) {
    dinner.goNext()
}

dinner.getReached();

dinner.getDeliveryMap();

// clear

restRooms();

console.log();
console.log();


// BFS

const alarm = new AlarmBlock(hotel[0]);

makeSomeFire();
alarm.isEnabled = true

while (alarm.isEnabled) {
    alarm.goNext()
}
alarm.getReached()