let playerTurn = true;
let playerHp = 100;

// ENEMY CLASSES
class Enemy {
    constructor(name, hp, weakness) {
        this.name = name
        this.hp = 100;
        this.weakness = [];
    }
    attack() {

    }
}    

// Angry class
class Angry extends Enemy {
    constructor(name, hp, weakness){
        super(name, weakness)
        this.weakness = ['shaq wiggle face', 'shaq rave', 'chef ainsley yea boi']

    }
    attack() {

    }
}
// Negative class
class Negative extends Enemy {
    constructor(name, hp, weakness){
        super(name, weakness)
        this.weakness = ['crying jordan', 'stephen A. Smith bad day', 'shia lebeouf do it']
        
    }
}
//Bored class
class Bored extends Enemy {
    constructor(name, hp, weakness){
        super(name, weakness)
        this.weakness = ['Shia lebouef creeping meme', 'casket dance meme', 'why are you running' ]
    }
    attack() {
        
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
console.log(broodingBrody.name, broodingBrody.weakness)

///////NOTES///////

// Maybe make a function to calculate critical hits and pass that function to any functions that deals with attacks
// Logic for critical strike: 
// let critical = Math.floor((Math.random() * 10) + 1);
// critical === 1 ? hp -= damage * 1.5 : hp

// let superEffective = Math.floor((Math.random() * 10) + 1);

// PLAYER MOVE LOGIC: determine the players turn by checking if boolean equals true and then letting them attack
// playerTurn = true;
// Regular damage = 20
// Make a damage calculator that has all damage related stuff 
function damageCalc(){
    // critical 2.0 of base
    // base 20
    // superEffective 1.5 of base
}