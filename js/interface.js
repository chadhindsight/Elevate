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

let allOptions = [button0, button1, button2, button3, button4]
let actions = document.querySelector('.actions');

let backButton = document.createElement('button');
backButton.innerText = "Back";
backButton.onclick = () => {
    actions.innerHTML = `
        <button id="button-1">Tough </button>
        <button id="button-2">Angry</button>
        <button id="button-3">Negative</button>
        <button id="button-4">Bored</button>
    `

    buttonsEventListeners()
}

// function buttons
const buttonsEventListeners = () => {
    document.querySelectorAll('button').forEach((button, i) => {

        // button.addEventListener('click', function () {
        //     message = player.playerAttack(angryAngie)
        //     document.querySelector('.message').innerHTML = `${message}`
        //     console.log('sdfdsfdfsass', message)

        //     enemyAttack(angryAngie, button);

        // })
        // Meme buttons
        button.addEventListener('click', function () {
            let buttons = allOptions[i].map((b, i) => {
                console.log(b)
                return `<button id="button-${+i + 1}">${b} </button>`
            })
            actions.innerHTML = buttons.join('\n');
            actions.appendChild(backButton)
        })
    })

}
buttonsEventListeners()