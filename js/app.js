
// ENEMY CLASSES
class Enemy {
    constructor(name, hp, weakness) {
        this.name = name
        this.hp = 100;
        this.weakness = weakness;
    }
    attack() {

    }
}    

// Angry class
class Angry extends Enemy {
    constructor(name, hp, weakness){
        super(name, weakness)
    }
}
// Negative class
class Negative extends Enemy {
    constructor(name, hp, weakness){
        super(name, weakness)
    }
}
//Bored class
class Bored extends Enemy {
    constructor(name, hp, weakness){
        super(name, weakness)
    }
}
// Tough class
class Tough extends Enemy {
    constructor(name, hp, weakness){
        super(name, weakness)
        this.hp = 200
    }
}


/////////////CHARACTERS/////////////
const angryAngie = new Angry('Angry Angie')
const crazyCarl = new Angry('Crazy Carl')

const negativeNancy = new Negative('Negative Nancy')
const komplainingKaren = new Negative('Komplainin Karen')

let boringBob = new Bored ('Boring Bob')
const broodingBrody = new Bored('Brooding Brody')

const tigerKing = new Tough('Tiger King')
console.log(angryAngie.name, angryAngie.hp)
console.log(crazyCarl.name)
console.log(negativeNancy.name)
console.log(komplainingKaren.name)
console.log(boringBob.name)
console.log(tigerKing.hp)