// PLAYER CLASS & RELATED STUFF
 const player = {
        hp: 105,
        weakness: ['shaq wiggle face', 'stephen A. Smith bad day', 'casket dance meme'],
        playerTurn: true    
}
// PLAYER'S MOVE LOGIC: determine the player's turn by checking a boolean value
const playerAttack = function () {
    // Not sure what to pass in as a param
    player.playerTurn = false;
}
//////ENEMY CLASSES//////
class Enemy {
    constructor(name, player) {
        this.name = name
        this.hp = 100;

        switch (this.name) {
            case "Angry Angie": 
                this.weakness = ['shaq wiggle face', 'shaq rave', 'chef ainsley yea boi']
            break;
            case "Crazy Carl":
                this.weakness = ['shaq wiggle face', 'shaq rave', 'chef ainsley yea boi']
                break;
            case "Negative Nancy":
                this.weakness = ['crying jordan', 'stephen A. Smith bad day', 'shia lebeouf do it']
            break;
            case "Komplainin Karen":
                this.weakness = ['crying jordan', 'stephen A. Smith bad day', 'shia lebeouf do it']
            break;
            case "Boring Bob":
                this.weakness = ['Shia lebouef creeping meme', 'casket dance meme', 'why are you running']
            break;   
            case "'Brooding Brody'":
                this.weakness = ['Shia lebouef creeping meme', 'casket dance meme', 'why are you running']
            break;    
            case "Tiger King":
                this.weakness = ['Carol Baskin', 'Corona Virus Cardi']
                this.hp = 200 
            break; 
            default:
                return 'Not a valid string value option!'
                this.weakness = [];            
        }
    }
    // Outside the constructor
    attack() {
        setTimeout(() => {
        
     }, 2000);
    }
}    



/////////////ENEMY CHARACTERS/////////////
// const angryAngie = new Angry('Angry Angie')
// const crazyCarl = new Angry('Crazy Carl')

// const negativeNancy = new Negative('Negative Nancy')
// const komplainingKaren = new Negative('Komplainin Karen')

// let boringBob = new Bored ('Boring Bob')
// const broodingBrody = new Bored('Brooding Brody')

// const tigerKing = new Tough('Tiger King')
const angryAngie = new Enemy('Angry Angie')
console.log(angryAngie.name, angryAngie.attack())


///////NOTES///////

// Maybe make a function to calculate critical hits and pass that function to any functions that deals with attacks
// Logic for critical strike: 
// let critical = Math.floor((Math.random() * 10) + 1);
// critical === 1 ? hp -= damage * 1.5 : hp

// Make a damage calculator that deals with all damage related stuff in it
function damageCalc(character){
    // miss rate
    let miss = Math.floor((Math.random() * 6));
    if( miss === 5) return 'You missed! Try again'
    else {
        // This covers critical and base damage cases
        let critical = Math.floor((Math.random() * 10) + 1);
        return critical >= 5 ? character.hp -= 25 : character.hp - 20
        // This covers superEffective case
        let superEffective = Math.floor((Math.random() * 10) + 1);
        return superEffective === 1 || superEffective === 5 ? character.hp - 30 : character.hp;
    }
}
