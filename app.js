// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { userWin } from './utils.js';

const playBtn = document.getElementById('play-game');
const winSpan = document.getElementById('total-wins');
const lossSpan = document.getElementById('total-losses');
const drawSpan = document.getElementById('total-draws');
console.log(playBtn);
let wins = 0;
let losses = 0;
let draws = 0;
playBtn.addEventListener('click', ()=>{
    console.log('clicked');
    const pic = document.querySelector('input[type=radio]:checked');
    const userChoice = pic.value;

    let computerChoice = 'rock';
    let randomChoice = Math.ceil(Math.random() * 3);
    if (randomChoice === 1) {
        computerChoice = 'rock';
    }
    else if (randomChoice === 2) {
        computerChoice = 'scissors';
    }
    else if (randomChoice === 3) {
        computerChoice = 'paper';
    }
    console.log(computerChoice);
    
    const isWinner = userWin(userChoice, computerChoice);

    if (isWinner === 'win') {
        wins++;
    }
    else if (isWinner === 'lose') {
        losses++;
    }
    else {
        draws++;
    }
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    drawSpan.textContent = draws;
});

