// Event listeners go in this file!
// let jams = document.getElementById("myAudio")
// jams.play();



// This is just a test to see if the right damage value logs to the console
// setTimeout(() => {
//     console.log(angryAngie.name, angryAngie.attack(damageCalc(player)))

// }, 2000);
let button0 = ['Carol', 'Corona', ''];
let button1 = ['Wiggle', 'Anime Power', 'Yeah'];
let button2 = ['MJ', 'Bad Day', 'Just Do It'];
let button3 = ['Superstar', 'Dance', 'Running'];

let allOptions = [button0, button1, button2, button3]
let actions = document.querySelector('.actions');

let backButton = document.createElement('button');
backButton.innerText = "Back";
backButton.onclick = () => {
    actions.innerHTML = `
        <button id="button-1">Tough </button>
        <button id="button-2">Angry</button>
        <button id="button-3">Negative</button>
        <button id="button-4">Bored</button>`

    buttonsEventListeners()
}
// function damageOutput() {
//     document.querySelector('.message').innerHTML = `${damageCalc(angryAngie)}`
//     enemyAttack(angryAngie, button);
// }

// Angry Negative Bored Tough

let randomChar = () => {
    if(enemyArray.length = 1) {
        // if array has only one char remaining return it and this is Tiger King
        return new Enemy(enemyArray[0][0])
    }
    let firstArr = Math.floor(Math.random() * (enemyArray.length - 1));
    console.log(enemyArray, enemyArray[firstArr], firstArr)
    let enemy = enemyArray[firstArr].splice(~~(Math.random() * enemyArray[firstArr].length), 1);
    if(enemyArray[firstArr].length === 0) enemyArray.splice(firstArr,1);

    return new Enemy(enemy);
}

function loadEnemy() {
    // 1st call new randChar / health
    // change dom /img /heal;th bar / music / emotes
    // first time you load game calla loadEnemy
}

// function buttons
function buttonsEventListeners () {
    console.log('here')
    document.querySelectorAll('button').forEach((button, i) => {
        // Meme buttons
        button.addEventListener('click', function () {
            // Reference to the text that gets displayed in the box at the bottom
            console.log(i, 'inside')
            actions.innerHTML = '';
            allOptions[i].forEach((b, i) => {
                console.log(b)
                let myButton = document.createElement('button');
                myButton.setAttribute('id', `button-${+i + 1}`);
                myButton.innerHTML = b;
                myButton.onclick = () => onClickHandler(myButton);
                actions.append(myButton);
            })
            actions.appendChild(backButton)
        })
    })
    
}
console.log('test test [][][]')
buttonsEventListeners()
function onClickHandler (button) {
    let battleMessage = document.querySelector('.message');
    //PLAYER'S TURN
    playerMessage = player.playerAttack(randomChar())
    // Input messages
    battleMessage.innerText = `${playerMessage}`
    // THE ENEMY'S TURN
    let enemyAttackMessage = setTimeout(() => {
        battleMessage.innerText = 'The enemy attacks you!'
        document.querySelector('.enemy').classList.add('attack')
    }, 3000);
    setTimeout(() => {
        document.querySelector('#char').classList.add('char-hit')
        document.querySelector('.enemy').classList.remove('attack')
    }, 4000);
    let jams = document.getElementById("myAudio")
    jams.volume = 0.2
    jams.play();
    // THE PLAYER'S TURN
    setTimeout(() => {
        document.querySelector('#char').classList.remove('char-hit')
        battleMessage.innerText = `Choose an attack`
    }, 6000);
    
    // setTimeout(() => {
    //     document.querySelector('.enemy').classList.add('char-hit')
    // }, 6500);

    // setTimeout(() => {
    //     document.querySelector('.enemy').classList.remove('char-hit')
    // }, 7000);
    console.log(button)
    enemyAttack(randomChar(), button);
}

// function gameStart() {
//     document.querySelector("#start").addEventListener {
//     }
// }


// PASS AS SECOND PARAM TO SETTIMEOUT
// document.getElementById("myVideo").duration