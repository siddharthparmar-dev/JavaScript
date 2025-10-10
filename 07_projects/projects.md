# javaScript projects related to DOM

# PROJECT 1 :  Background Color switcher
# HTML code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Switcher</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to Background color switcher</h1>
    <div class="main-content">
        <div class="button" id="red"></div>
        <div class="button" id="blue"></div>
        <div class="button" id="green"></div>
        <div class="button" id="grey"></div>
    </div>
    <h2>Tap on the colour to see the magic</h2>
    <script src="script.js"></script>
</body>
</html>
```
# CSS code
```css
*{
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
body{
    text-align: center;
    margin: 25% auto 25%;
}

h1{
    font-size: xx-large;
    font-weight: bolder;
}

.main-content{
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
}

.main-content div{
    display: inline-block;
    height: 100px;
    width: 100px;
    border: 5px solid black;
    border-radius: 40px;
}

#red{
    background-color: red;
}
#blue{
    background-color:blue ;
}
#green{
    background-color: green;
}
#grey{
    background-color: gray;
}
```
# javascript code
```javascript
const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        console.log(event.target.id);
        if (event.target.id === "red") {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === "blue") {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === "green") {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === "grey") {
            body.style.backgroundColor = event.target.id
        }        
    })
    
})
```

# PROJECT 2 : BMI CALCULATOR
# HTML CODE

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>   
    <div class="main-content">
        <h1> <img src="backdrop.webp" alt="">BMI Calculator</h1>
        <form>
            <p>
                <label> Name:</label>
                <input id="name" type="text" placeholder="Enter your Name">
            </p>
        <p>
            <label>Height in cm :</label>
            <input type="text" id="height" placeholder="Enter your Height">
        </p>
        <p>
            <label> Weight in kg:</label>
            <input type="text" id="Weight" placeholder="Enter your Weight">
        </p>
        <button>Calculate My BMI</button>
        <div id="result"></div>
        <div id="data"></div>
        </form>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

# CSS CODE
```css
@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap');

*{
    margin: 0;
     font-family: "Rowdies", sans-serif;
     font-weight: 100;
}
body{
    background: linear-gradient(135deg, #f0f9ff, #c9e4f7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.main-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 10px;
    margin-top: 5%;
    text-align: center;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 10px;
    width: 95%;
    max-width: 400px;
    box-sizing: border-box;
}

.main-content h1{
    padding: 10px;
    color: rgb(255, 255, 255);
    background-color: #146cca;
    width: 95%;
    border-radius: 5px;
}

h1 img{
    height: 30px;
    width: 50px;
    border-radius: 20px;
    margin-right: 10px;
}

.main-content form{
    margin-top: 20px;
}

.main-content form label{
    color: #000000;
    margin: 4px;
}

.main-content form p{
    margin: 10px;
    color: #142402;
}

label{
    display: flex;
    justify-content: left;
    font-size: large;
}

#name{
    text-transform: uppercase;
}

input{
    border-radius: 5px;
    border: 2px solid black;
    height: 30px;
    text-align: center;
    font-size: medium;
}
input::placeholder{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    color: black;
    text-align: center;
    text-transform: none;
}

button{
    background-color: #ca1414;
    color: #fff;
    border-radius: 5px;
    margin-top: 5px;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 2px solid rgb(0, 0, 0);
    font-size: large;
}

button:hover{
    transform: scale(1.1);
    transition-duration: 0.2s;
    border: 2px solid rgb(0, 0, 0);
}

button:active{
    transform: scale(0.8);
}

#result{
    color: #000000;   
    font-size: larger;
    padding: 10px;
    text-transform: capitalize;
}

#data{
    color: rgb(0, 0, 0);
    font-size: larger;
    padding: 8px;
}

h3{
    margin: 10px;
    text-decoration: underline;
}

#weight-guide{
    padding: 15px;
    width: 90%;
    background-color: #146cca;
    color: #fff;
    border: 2px solid black;
    border-radius: 10px;
}

#weight-guide p{
    padding: 5px;
}

```

# javascript code

```javascript
    const form = document.querySelector("form")

form.addEventListener("submit",function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#Weight").value)
    const results = document.querySelector("#result")
    const name = document.querySelector("#name").value
    const Category = document.querySelector("#data")

    if (height === "" || height < 0 || isNaN(height)){
        results.innerHTML = "Please enter a valid height"
    }else if (weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please enter a valid weight"
    }else{
        const BMI = (weight/((height*height)/10000)).toFixed(1)
        results.innerHTML = `${name} Your BMI is ${BMI}`

         if (BMI < 18.6) {
        Category.innerHTML = `${name} you are in Under weight Range! `
        }else if (BMI > 18.6 && BMI < 25) {
        Category.innerHTML = `${name} you are in Normal Range!`
        }else {
            Category.innerHTML = `${name} you are in over Weight Range!`
        }
    }
})

```

# PROJECT 3 CLOCK

# HTML  CODE
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="main-content">
        <div id="label">Your Local time is </div>
        <div id="clock"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

# CSS CODE

```css
*{
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.main-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0);
}

#label{
    color: #fff;
    font-size: x-large;
}

#clock{
    height: 50px;
    width: 150px;
    background-color: rgb(73, 1, 102);
    border-radius: 20px;
    margin: 15px;
    color: #fff;
    text-align: center;
    font-size: large;
    font-weight: 500;
    padding-top: 15px;
}
```

# JAVASCRIPT CODE
```js
const clock = document.getElementById("clock")

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    
},1000)
```



# PROJECT 4 GUESS THE NUMBER GAME

# HTML CODE 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the number</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="wrapper">
      <h1>Number Guessing Game</h1>
    <p>Try and guess a random number between 1 and 25.</p>
    <p>You have 10 attempts to guess the right number.</p>
    <p class="lowOrHi"></p>
    </br>
        <form class="form">
            <label for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

# CSS CODE
```css
*{
    margin: 0;
    padding: 0;
}
body{
  background: linear-gradient(135deg, #1951d5, #202043, #c77cc3);
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    height: 100vh;
}
#wrapper{
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    width: 95%;
    max-width: 400px;
    box-sizing: border-box;
    border: 2px solid transparent;
    background-color: transparent;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
}

form{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

#guessField{
    height: 20px;
    width: 200px;
}

#subt{
    padding: 3px;
    border: 1px solid;
}

h1{
    height: 20%;
    width: 95%;
    text-align: center;
    padding: 5px;
    margin-bottom: 20px;
    color:#edfe00 ;
    font-family: Verdana, Geneva, Tahoma, sans-serif; 
    animation: colorChange 1s infinite alternate;
}

@keyframes colorChange {
  0%   { color: #ff0080; } /* Hot Pink */
  50%  { color: #ffed00; } /* Bright Yellow */
  100% { color: #00ffea; } /* Aqua Neon */
}

p{
    margin: 4px;
    font-weight: bold;
    height: 10%;
    width: 90%;
    text-align: center;
    padding: 10px;
    font-size: large;
    color: #ffffff;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

#guess{
    font-size: xx-large;
    font-weight: bold;
    color: #ffd700;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

#subt{
    background-color: #840894;
    color: rgb(255, 255, 255);
    padding: 10px;
    border: none;
    font-size: medium;
    height: 30%;
    border-radius: 10px;
}
#subt:hover{
    transform: scale(1.1);
    transition-duration: 0.2s;
}
#subt:active{
    transform: scale(0.8);
    transition-duration: 0.5s;
}
#guessField{
    padding: 5px;
    border-radius: 5px;
    border: transparent;
    text-align: center;
    font-weight: bold;
    font-size: large;
}
.resultParas{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.resultParas p{
    padding-bottom: 10px;
    color: #fdffff;
}

.lowOrHi{
    color:#00fe48 ;
    font-size: 17px
}

.guesses{
    color: #edfe00;
}

.lastResult{
    color: #edfe00;
}

#newGame {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-top: 15px;
  border: 2px solid white;
  border-radius: 12px;   /* makes corners rounded */
  background: linear-gradient(135deg, #ff00cc, #3333ff);
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

#newGame:hover {
  background: linear-gradient(135deg, #ff3399, #0066ff);
  transform: scale(1.05);
}

```

# JAVASCRIPT CODE
```js
let minimum = 0

let maximum = 25

let randomNumber = parseInt((Math.random()*(maximum-minimum+1)+ minimum) );

const submit = document.querySelector("#subt")
const userinput = document.querySelector("#guessField")
const previousGuesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrhi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")


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
        lowOrhi.innerHTML = "please enter a number greater than 1"
        userinput.value = ""
    }
    else if (guess > 25) {
        lowOrhi.innerHTML = "Please enter a number less than 25"
        userinput.value = ""
    }else{
        prevGuess.push(guess)
        if (numGuess === 10) {
            cleanupGuess(guess)
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
        displayMessage(`WINNER! you guessed it right`)
    }else if (guess < randomNumber) {
        displayMessage('oh! it was very close')
    }else if (guess > randomNumber) {
        displayMessage(`oops! Try Again`)
    }
}
function cleanupGuess(guess){
    userinput.value = ""
    previousGuesses.innerHTML += `${guess},`
    numGuess++
    lastResult.innerHTML = `${11- numGuess}`
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
        lastResult.innerHTML = `${11- numGuess}`
        userinput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
```

