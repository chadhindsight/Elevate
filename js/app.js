// PLAYER CLASS & RELATED STUFF
 const player = {
        hp: 105,
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
         return damageCalc(badGuy)
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
            case "Brooding Brody":
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
    console.log(buttonChoice)
    setTimeout(() => {
        enemy.attack(()=>console.log('attack'))(enemy)
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
    critical = Math.ceil((Math.random() * 10));
    superEffective = Math.ceil((Math.random() * 10));
    miss = Math.floor((Math.random() * 6));
    // miss rate
    // let miss = Math.floor((Math.random() * 6));
    if( miss === 5) return message = 'Attack missed!'
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
        return message = 'Opponent lost 20 health'
    }
}
// Maybe put them back here
// document.querySelector("#game button").onclick = function(){
//     document.querySelector("#game").className=""
// }