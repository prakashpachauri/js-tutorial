let randomNumber = parseInt(Math.random()* 100+ 1);
const userInput = document.querySelector('#guessfield');
const submit=document.querySelector('#submit');        
const guessslot=document.querySelector('.guesses'); 
const Remaining=document.querySelector('.lastResult') ;
const loworHi=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess=[];
let numGuess=1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
       const guess = parseInt(userInput.value);
    //    console.log(guess);
        ValidationGuess(guess);
       
    });

}

function ValidationGuess(guess){
    if(isNaN(guess)) {
        alert('please enter a valid number');
    } else if(guess < 1)
        alert('please enter a number more than 1');
    else if(guess > 100)
        alert('please enter a number less than 100');
    else{
        prevGuess.push(guess);
       if(numGuess === 11){
        console.log('Game Over');
         displayGuess(guess);
         displayMessage(`Game Over! Random number was ${randomNumber}`);
         
         endGame();       
        
       } else {
            displayGuess(guess);
            checkGuess(guess);
       }
    }   
}

function checkGuess(guess){
    if(guess ===randomNumber){
        displayMessage('You guessed it right!');    
        endGame();
    } else if(guess < randomNumber){
        displayMessage('Number is too low!');
    } else if(guess > randomNumber){
        displayMessage('Number is too high!');
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessslot.innerHTML += `${guess} , `;
    numGuess++;
    Remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message) {
    loworHi.innerHTML = `${message}`;
}


function endGame(){
    console.log('Game Over');
    userInput.value='';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
     startover.appendChild(p);
    playGame = false;
    newGame();


}


function newGame(){
    const newGameButton = document.querySelector('#newGame');
    displayMessage('');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessslot.innerHTML = '';
        Remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
       
        startover.removeChild(p);
         playGame = true;
    });

}