// import functions and grab DOM elements
import { getRandomThrow, whoWon } from './utils.js';

const buttonEl = document.querySelector('#play-button');
const resultsSpan = document.querySelector('#resultsSpan');
const winSpan = document.querySelector('#win');
const lossesSpan = document.querySelector('#loose');
const drawsSpan = document.querySelector('#draw');

console.log(buttonEl, resultsSpan, winSpan, lossesSpan, drawsSpan);





// let wins = 0;
// let losses = 0;
// let draws = 0;
// let total =0;

// set event listeners to update state and DOM
buttonEl.addEventListener('click', () => {
    let wins = 0;
    let losses = 0;
    let draws = 0;

    const computerThrow = getRandomThrow();
    const currentlySelectedRadioButton = document.querySelector('input:checked');
    const userGuess = currentlySelectedRadioButton.value;
    const gameResults = whoWon(computerThrow, userGuess);

    if (gameResults === 'win') {
        wins++;
        winSpan.textContent = wins;
        resultsSpan.textContent = 'you win';
    }

    if (gameResults === 'loose') {
        losses++;
        lossesSpan.textContent = losses;
        resultsSpan.textContent = 'you lost try again';
    }

    if (gameResults === 'draws') {
        draws++;
        drawsSpan.textContent = draws;
        resultsSpan.textContent = 'it\'s a draw';

    }
});

//total++;
// resetButton.addEventListener('click', 'reset');