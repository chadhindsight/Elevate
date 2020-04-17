// PLAYER CLASS & RELATED STUFF
 const player = {
        hp: 100,
        weakness: ['shaq wiggle face', 'stephen A. Smith bad day', 'casket dance meme'],
        playerTurn: true,
    // PLAYER'S MOVE LOGIC: determine the player's turn by checking a boolean value
        playerAttack: function (badGuy) {
            setTimeout(() => {
                document.querySelector('.enemy').classList.add('char-hit')
            }, 1000);

            setTimeout(() => {
                document.querySelector('.enemy').classList.remove('char-hit')
            }, 1500);
            this.playerTurn = false;   
         return damageCalc(randomChar())
     }   
}

//////ENEMY CLASSES//////
class Enemy {
    constructor(name, player) {
        this.name = name
        this.hp = 100;
        this.attack = function(cb) {
            return cb;
        }
    }
}    

function enemyAttack(user, buttonChoice) {
    buttonChoice.setAttribute("disabled", 'true')
    console.log(buttonChoice)
    setTimeout(() => {
       damageCalc(user)
       buttonChoice.removeAttribute("disabled")
    }, 2000);
    
    // playerTurn !=playerTurn
}

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
    document.querySelector('#enemyhp')[enemyhp]= character.hp
    critical = Math.ceil((Math.random() * 10));
    superEffective = Math.ceil((Math.random() * 10));
    miss = Math.floor((Math.random() * 6));
    // miss rate
    // let miss = Math.floor((Math.random() * 6));
    if( miss === 4) {
    return message = 'Attack missed!'
    }
        // This covers critical, super effective, & base damage cases
        // MESSAGES THAT WILL GET 
        
    else if (critical >= 8) {
        console.log(character.hp)
        character.hp -= 25
        return message = 'Critical hit'
    }
    else if (superEffective === 1 || superEffective === 5 ) {
        console.log(character.hp)
        character.hp -= 30
        return message = `It's super effective!`
    }
    else {
        console.log(character.hp)
        character.hp -= 20
        return message = 'Opponent lost 20 health'
    }
 
}
// Maybe put them back here
// document.querySelector("#game button").onclick = function(){
//     document.querySelector("#game").className=""
// }