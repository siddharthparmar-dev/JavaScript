let minimum = 0

let maximum = 10

let randomNumber = parseInt((Math.random()*(maximum-minimum)+1+ minimum) );

const submit = document.querySelector("#subt")
const userinput = document.querySelector("#guessField")
const previousGuesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrhi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")
const newMsg = document.querySelector(".msg")


let p = document.createElement("p")

let prevGuess = []

let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click",function(event){
        event.preventDefault()
        const guess = parseInt(userinput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        lowOrhi.innerHTML = "please enter a valid number"
        userinput.value = ""
    }else if (guess < 1) {
        lowOrhi.innerHTML = "please enter a number greater than 0"
        userinput.value = ""
    }
    else if (guess > 10) {
        lowOrhi.innerHTML = "Please enter a number less than 10"
        userinput.value = ""
    }else{
        prevGuess.push(guess)
         if (guess === randomNumber) {
            checkGuess(guess);
            cleanupGuess(guess)  // will show WINNER
            endGame();
        }
        else if (numGuess === 5) {
            cleanupGuess(guess)
            displaymsg(`You Lost!😔 Try Again`)
            displayMessage(`Game over! Random Number was ${randomNumber}`)
            lastResult.innerHTML = "0"
            endGame()
        } else{
            cleanupGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if (guess === randomNumber) {
        displaymsg(`🎉🥳 WINNER!🎉🥳`)
        displayMessage(`Random Number was ${randomNumber}`)
        endGame()
    }else if (guess < randomNumber) {
        displayMessage('WRONG❌')
    }else if (guess > randomNumber) {
        displayMessage(`WRONG❌`)
    }
}
function cleanupGuess(guess){
    userinput.value = ""
    previousGuesses.innerHTML += `${guess},`
    numGuess++
    lastResult.innerHTML = `${6- numGuess}`
}
function displaymsg(msg){
    newMsg.innerHTML = `${msg}`
}
function displayMessage(message){
    lowOrhi.innerHTML = `${message}`
}
function endGame(){
    userinput.value = ""
    userinput.setAttribute('disabled','')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    p.classList.add("button")
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newButton = document.querySelector("#newGame")
    newButton.addEventListener("click",function (e){
        randomNumber = parseInt((Math.random()*(maximum-minimum+1)+ minimum) );
        prevGuess = []
        numGuess = 1
        previousGuesses.innerHTML=""
        lastResult.innerHTML = `${6- numGuess}`
        userinput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
        newMsg.innerHTML = ""
        lowOrhi.innerHTML = ""
    })
}








 