# projects related dom

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-88pdwj?file=1-colorChanger%2Fchaiaurcode.js)

# solution  code
## project 1 - background changer

```Javascript  project 1

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
 console.log(button)
 button.addEventListener('click' , function(e){
      console.log(e);
      // console.log(e.target.id);
      if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'purple'){
        body.style.backgroundColor = e.target.id
      }
      
 })
})

```
## project 2 - BMI calculator
``` JavaScript project -2
const form = document.querySelector('form')

form.addEventListener("submit" , function(e){
  // form ka behaviour he vo reset ho jay //
  e.preventDefault();
  // height,weight,result ko access karenge //
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // condition apply karenge
  if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  }else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a validn weight ${weight}`
  }else{
     const BMI = (weight / ((height * height ) / 10000)).toFixed(2);
     results.innerHTML  = `<span>${BMI}</span>`
  }
})

```

## project 3 - Guessing random number GAME 

``` javascript project -3

let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

// selectors ko access karna he based on class and id  //
const userInput  = document.querySelector("#guessField");
const submitButton  = document.querySelector("#subt");
const previousGuesse  = document.querySelector(".guesses");
const remaining  =  document.querySelector(".lastResult");
const lowOrHigh  = document.querySelector(".lowOrHi");
const startOver  = document.querySelector(".resultParas");

// extra one para create
const p  = document.createElement('p');

// javascript logic //
let startGame  = true;
let previousGuess  = []
let numGuess  =  1;

if(startGame){
  submitButton.addEventListener("click" , function(e){
    e.preventDefault();
    const guessNumber  = parseInt(userInput.value);
    console.log(guessNumber);
    validateGuess(guessNumber);
  })
}


function validateGuess(guessNumber){
      // 1 to 100 range me hi number guess kare user ..//
      if(isNaN(guessNumber)){
        alert("please enter a valid number.")
      }else if(guessNumber<1){
        alert("please enter a number more than 1 .")
      }else if(guessNumber>100){
        alert("please enter a number less than 100.")
      }else{
        previousGuess.push(guessNumber);
        if(numGuess === 9){
          displayGuess(guessNumber);
          displayMessage(`Game Over : Random number was ${randomNumber}` )
          endGame()
        }else{
          checkGuess(guessNumber)
          displayGuess(guessNumber);
        }
        
      }

}

function checkGuess(guessNumber){
    // hint number guessing 
    if(guessNumber === randomNumber){
      displayMessage(`you are guess number is right congratulations.😊👍`);
      endGame();
    }else if(guessNumber < randomNumber){
          displayMessage(`Number is ToO low🤦‍♂️`);
    }else if(guessNumber > randomNumber){
         displayMessage(`Number is ToO high🚀🤷‍♂️`);
    }
}

function displayGuess(guessNumber){
 //input empty , guessing count decrease ho or guessing number display ho //
 userInput.value = '';
 previousGuesse.innerHTML += `${guessNumber} ,`;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){
 // one message 
 lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
   userInput.value   = '';
   userInput.setAttribute("disabled" , '');
   p.classList.add('button')
   p.innerHTML  = `<h2 id='newGame'>Start new game</h2>`
   startOver.appendChild(p); // result para ke niche append karo child ko (p)
   startGame  = false
   newGame();
}

function newGame(){
 // reset all value //
 const newGameButton  = document.querySelector("#newGame");
 newGameButton.addEventListener("click" , function(e){
   randomNumber  = parseInt(Math.random() * 100 + 1);
   previousGuess = [];  
   newGuess = 1;
   previousGuesse.innerHTML = ''; // array empty ho jay
   remaining.innerHTML = ``;   // remaining staring to start
   userInput.removeAttribute("disabled"); // input field input access
   startOver.removeChild(p) // new button remove
   startGame = true;
 })

}

```
## projects 4 - unlimited colors
``` javascript project - 4 

 // hex randommcolor generate karna he //
  
const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = '#';

  // hex color range  six digit //
  for(let i = 0 ; i<6 ; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
 
}
// console.log(randomColor());

let IntervalId;
const startChangingColor = function(){

  if(!IntervalId){
    IntervalId = setInterval(changeColor , 1000);  
  }  
  // continue color changes hote rahe
  function changeColor(){
    document.body.style.backgroundColor = randomColor();  
  }
  
}

const stopChangingColor = function(){
  clearInterval(IntervalId);
  IntervalId = null; // id ko flash out kar lo
}

document.querySelector("#start").addEventListener("click" , startChangingColor); 
// startChangingColor ka raference liya he //
document.querySelector("#stop").addEventListener("click" , stopChangingColor); 

```

