// Event listeners go in this file!
let jams = document.getElementById("myAudio")
jams.play();



// This is just a test to see if the right damage value logs to the console
// setTimeout(() => {
//     console.log(angryAngie.name, angryAngie.attack(damageCalc(player)))

// }, 2000);
let button0 = ['Carol', 'Corona', ''];
let button1 = ['Wiggle', 'Anime Power', 'Yeah'];
let button2 = ['MJ', 'Bad Day', 'Just Do It'];
let button3 = ['Superstar','Dance', 'Running'];

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
const enemyArray = [['Angry Angie', 'Crazy Carl'], ['Negative Nancy', 'Komplainin Karen'], ['Boring Bob', 'Brooding Brody'], ['Tiger King','Tiger King']]

let randomChar = () => {
    let firstArr = Math.floor(Math.random() * (enemyArray.length - 1));
    console.log(enemyArray, enemyArray[firstArr], firstArr)
    return new Enemy(enemyArray[firstArr][~~(Math.random() * enemyArray[firstArr].length)]);
}
// function buttons

const buttonsEventListeners = () => {
    document.querySelectorAll('button').forEach((button, i) => {

       
        // Meme buttons
        button.addEventListener('click', function () {
            // Reference to the text that gets displayed in the box at the bottom
            let battleMessage = document.querySelector('.message');

            actions.innerHTML = '';
            allOptions[i].forEach((b, i) => {
                console.log(b)
                let myButton = document.createElement('button');
                myButton.setAttribute('id', `button-${+i + 1}`);
                myButton.innerHTML = b;
                myButton.onclick = () => {
                    playerMessage = player.playerAttack(randomChar())
                   
                    // Input messages
                    battleMessage.innerText = `${playerMessage}`
                    // THE ENEMY'S TURN
                   let enemyAttackMessage = setTimeout(() => {
                        battleMessage.innerText = 'The enemy attacks!'
                       document.querySelector('.enemy').classList.add('attack')
                    }, 2000);
                   
                    setTimeout(() => {
                        document.querySelector('#char').classList.add('char-hit')
                        document.querySelector('.enemy').classList.remove('attack')
                    }, 4000);
                    // THE PLAYER'S TURN
                    setTimeout(() => {
                        document.querySelector('#char').classList.remove('char-hit')
                        battleMessage.innerText = `Choose an attack`
                    }, 6000);
                    enemyAttack(randomChar(), button);
                }
                actions.append(myButton);
            })
            actions.appendChild(backButton)
        })
    })

}


// function gameStart() {
//     document.querySelector("#start").addEventListener {
//     }
// }
buttonsEventListeners()