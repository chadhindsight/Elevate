// Event listeners go here!
// let jams = document.getElementById("myAudio")
// jams.play();



// Just a test
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
const enemyArray = [['Angry Angie', 'Crazy Carl'], ['Negative Nancy', 'Komplainin Karen'], ['Boring Bob', 'Brooding Brody'], ['Tiger King']]

let randomChar = () => {
    let firstArr = Math.floor(Math.random() * enemyArray.length - 1 );
    
    return new Enemy(enemyArray[firstArr][~~(Math.random() * enemyArray[firstArr].length)]);
}
// function buttons

const buttonsEventListeners = () => {
    document.querySelectorAll('button').forEach((button, i) => {

       
        // Meme buttons
        button.addEventListener('click', function () {
            actions.innerHTML = '';
            allOptions[i].forEach((b, i) => {
                console.log(b)
                let myButton = document.createElement('button');
                myButton.setAttribute('id', `button-${+i + 1}`);
                myButton.innerHTML = b;
                myButton.onclick = () => {
                    message = player.playerAttack(angryAngie)
                    document.querySelector('.message').innerHTML = `${message}`
                    console.log('sdfdsfdfsass', message)
                    enemyAttack(angryAngie, button);
                }
                actions.append(myButton);
            })
            actions.appendChild(backButton)
        })
    })

}
buttonsEventListeners()