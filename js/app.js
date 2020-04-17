//currentEnemy is the variable that stores the value of the current enemy
let currentEnemy 
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
         return damageCalc(currentEnemy)
     }   
}

//////ENEMY CLASSES//////
// class Enemy {
//     constructor(name, player) {
//         this.name = name
//         this.hp = 100;
        
//     }
// }    
// Second param is passed in to disable button from being spammed by player
function enemyAttack(user, buttonChoice) {
    buttonChoice.setAttribute("disabled", 'true')
    console.log(buttonChoice)
    setTimeout(() => {
       damageCalc(user)
       buttonChoice.removeAttribute("disabled")
    }, 2000);
    
    // playerTurn !=playerTurn
}
let randomChar = () => {
    if (enemyArray.length === 1) {
        // if array has only one char remaining return it and this is Tiger King
        return enemyArray[0][0];
    }
    let firstArr = Math.floor(Math.random() * (enemyArray.length - 1));
    console.log(enemyArray, enemyArray[firstArr], firstArr)
    let enemy = enemyArray[firstArr].splice(~~(Math.random() * enemyArray[firstArr].length), 1);
    if (enemyArray[firstArr].length === 0) enemyArray.splice(firstArr, 1);

    return enemy[0];
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
    // 
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
        character.hp -= 25
        console.log(character.hp)
        return message = 'Critical hit'
    }
    else if (superEffective === 1 || superEffective === 5 ) {
        character.hp -= 30
        console.log(character.hp)
        return message = `It's super effective!`
    }
    else {
        character.hp -= 20
        console.log(character.hp)
        return message = 'Opponent lost 20 health'
    }
 
}
// Maybe put them back here
// document.querySelector("#game button").onclick = function(){
//     document.querySelector("#game").className=""
// }