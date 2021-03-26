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
    const expected3 = 'draw';
    const actualPaperRock = whoWon('paper', 'rock');
    const expectedPaperRock = 'win';

    //Arrange
    // Set up your arguments and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
    expect.equal(actualPaperRock, expectedPaperRock, 'paper rock');
});

