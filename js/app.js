// PLAYER CLASS & RELATED STUFF
 const player = {
        hp: 105,
        weakness: ['shaq wiggle face', 'stephen A. Smith bad day', 'casket dance meme'],
        playerTurn: true    
}
// PLAYER MOVE LOGIC: determine the player's turn by checking if boolean equals true and then letting them attack
const playerName = prompt(`What's your name?`);   
const playerAttack = function () {
    // Not sure what to pass in as a param
    damageCalc()
    player.playerTurn = false;
}

//////ENEMY CLASSES//////
class Enemy {
    constructor(name) {
        this.name = name
        this.hp = 100;
        this.weakness = [];
    }
    enemyAttack() {
        setTimeout(() => {
            damageCalc(player)
        }, 2000);
       player.playerTurn = true
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


/////////////ENEMY CHARACTERS/////////////
const angryAngie = new Angry('Angry Angie')
const crazyCarl = new Angry('Crazy Carl')

const negativeNancy = new Negative('Negative Nancy')
const komplainingKaren = new Negative('Komplainin Karen')

let boringBob = new Bored ('Boring Bob')
const broodingBrody = new Bored('Brooding Brody')

const tigerKing = new Tough('Tiger King')
console.log(playerName)
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

// Make a damage calculator that deals with all damage related stuff in it
function damageCalc(character){
    // miss rate
    let miss = Math.floor((Math.random() * 6));
    if( miss === 6) return 'You missed! Try again'
    else {
        // This covers critical and base damage cases
        let critical = Math.floor((Math.random() * 10) + 1);
        critical >= 5 ? character.hp = character.hp - 25 : character.hp - 20
        // This covers superEffective case
        let superEffective = Math.floor((Math.random() * 10) + 1);
        superEffective === 1 || superEffective === 5 ? character.hp - 30 : character.hp;
    }
    // playerTurn = false;
}