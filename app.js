// import functions and grab DOM elements
import { getRandomThrow, whoWon } from './utils.js';

const buttonEl = document.getElementById('play-button');
const rockEl = document.getElementById('Rock-for-the-win');
const paperEl = document.getElementById('Paper-for-the-win');
const scissorsEl = document.getElementById('Scissors-for-the-win');
const resetButton = document.getElementById('reset');


// let total =0;

// set event listeners to update state and DOM
buttonEl.addEventListener('click', () => {
    const computerThrow = getRandomThrow();
    const currentlySelectedRadioButton = document.querySelector('input:checked');
    const userGuess = currentlySelectedRadioButton.value;
}

//total++;

resetButton.addEventListener('click', reset);