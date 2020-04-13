// PLAYER CLASS
class Player{
    constructor() {
        this.playerTurn = true;
        this.hp = 105;
        this.playerWeakness = ['shaq wiggle face', 'stephen A. Smith bad day', 'casket dance meme'];

    }
}
// ENEMY CLASSES
class Enemy {
    constructor(name) {
        this.name = name
        this.hp = 100;
        this.weakness = [];
    }
    attack(playerHp) {
        return playerHp -= 20
    }
}    

// Angry class
class Angry extends Enemy {
    constructor(name){
        super(name)
        this.weakness = ['shaq wiggle face', 'shaq rave', 'chef ainsley yea boi']

    }
    attack() {

    }
}
// Negative class
class Negative extends Enemy {
    constructor(name){
        super(name)
        this.weakness = ['crying jordan', 'stephen A. Smith bad day', 'shia lebeouf do it']
        
    }
}
//Bored class
class Bored extends Enemy {
    constructor(name){
        super(name)
        this.weakness = ['Shia lebouef creeping meme', 'casket dance meme', 'why are you running' ]
    }
    attack() {
        
    }
}
// Tough class
class Tough extends Enemy {
    constructor(name){
        super(name)
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
console.log(broodingBrody.name, broodingBrody.weakness)

///////NOTES///////

// Maybe make a function to calculate critical hits and pass that function to any functions that deals with attacks
// Logic for critical strike: 
// let critical = Math.floor((Math.random() * 10) + 1);
// critical === 1 ? hp -= damage * 1.5 : hp

// let superEffective = Math.floor((Math.random() * 10) + 1);

// PLAYER MOVE LOGIC: determine the players turn by checking if boolean equals true and then letting them attack
const playerAttack = function() {
    damageCalc()    
    
    playerTurn = false;
}

// Make a damage calculator that has all damage related stuff in it
function damageCalc(character){
    // miss rate
    let miss = Math.floor((Math.random() * 6) + 1);
    if( miss === 6) return 'You missed!'
    else {
        // critical 
        let critical = Math.floor((Math.random() * 10) + 1);
        critical >= 5 ? character.hp = character.hp - 25 : character.hp - 20
        // superEffective 1.5 of base
        let superEffective = Math.floor((Math.random() * 10) + 1);
        superEffective === 1 || superEffective === 5 ? character.hp - 30 : character.hp;
    }
    // playerTurn = false;
}