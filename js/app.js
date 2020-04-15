// PLAYER CLASS & RELATED STUFF
 const player = {
        hp: 105,
        weakness: ['shaq wiggle face', 'stephen A. Smith bad day', 'casket dance meme'],
        playerTurn: true,
        playerAttack: function (badGuy) {
            this.playerTurn = false;   
         return damageCalc(badGuy)
     }   
}
// PLAYER'S MOVE LOGIC: determine the player's turn by checking a boolean value

//////ENEMY CLASSES//////
class Enemy {
    constructor(name, player) {
        this.name = name
        this.hp = 100;
        this.attack = function(cb) {
            return cb;
        }
        switch (this.name) {
            case "Angry Angie": 
                this.weakness = ['shaq wiggle face', 'shaq rave', 'chef ainsley yea boi']
            break;
            case "Crazy Carl":
                this.weakness = ['shaq wiggle face', 'shaq rave', 'chef ainsley yea boi']
                this.hp = 140
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
        }
    }
}    

function enemyAttack(enemy, buttonChoice) {
    buttonChoice.setAttribute("disabled", 'true')
    setTimeout(() => {
        enemy.attack(()=>console.log('attack'))(angryAngie.attack)
       buttonChoice.removeAttribute("disabled")
    }, 2000);
    // playerTurn !=playerTurn
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

// // Just a test
// setTimeout(() => {
//     console.log(angryAngie.name, angryAngie.attack(damageCalc(player)))
 
// }, 2000);

///////NOTES///////

// Maybe make a function to calculate critical hits and pass that function to any functions that deals with attacks
// Logic for critical strike: 
// let critical = Math.floor((Math.random() * 10) + 1);
// critical === 1 ? hp -= damage * 1.5 : hp

// Make a damage calculator that deals with all damage related stuff in it
let message;
let critical = Math.ceil((Math.random() * 10));
let superEffective = Math.ceil((Math.random() * 10));
let miss = Math.floor((Math.random() * 6));

function damageCalc(character){
    critical = Math.ceil((Math.random() * 10));
    superEffective = Math.ceil((Math.random() * 10));
    miss = Math.floor((Math.random() * 6));
    // miss rate
    // let miss = Math.floor((Math.random() * 6));
    if( miss === 5) return message = 'You missed! Try again'
        // This covers critical, super effective, & base damage cases
        // MESSAGES THAT WILL GET DISPLAYED
    else if (critical >= 8) {
        character.hp -= 25
        return message = 'Critical hit'
    }
    else if (superEffective === 1 || superEffective === 5 ) {
        character.hp -= 30
        return message = `It's super effective!`
    }
    else {
        character.hp - 20
        return message = 'You did 20 damage'
    }
}
// Maybe put them back
// document.querySelector("#game button").onclick = function(){
//     document.querySelector("#game").className=""
// }