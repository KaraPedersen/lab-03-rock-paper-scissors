// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { whoWon } from '../utils.js';
const test = QUnit.test;


test('who won', (expect) => {
    const actual = whoWon('rock', 'paper');
    const expected = 'loose';
    const actual2 = whoWon('rock', 'scissors');
    const expected2 = 'win';
    const actual3 = whoWon('rock', 'rock');
    const expected3 = 'draws';
    const actualPaperRock = whoWon('paper', 'rock');
    const expectedPaperRock = 'win';

    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
    expect.equal(actualPaperRock, expectedPaperRock, 'paper rock');

});

test('a draw will happen when both things are equal', (expect) => {
    const actual = whoWon('rock', 'rock');
    const expected = 'draws';

    expect.equal(actual, expected);

});

test('a win will happen when rock beats scissors', (expect) => {
    const actual = whoWon('rock', 'scissors');
    const expected = 'win';

    expect.equal(actual, expected);

});

test('a loss will happen when scissors beats paper', (expect) => {
    const actual = whoWon('paper', 'scissors');
    const expected = 'loose';

    expect.equal(actual, expected);

});

