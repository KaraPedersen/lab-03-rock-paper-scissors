// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../utils.js'
const test = QUnit.test;
const whoWon = getRandomThrow;

test('who won', (expect) => {
    const actual = whoWon('rock', 'paper');
    const expected = 'lost';
    const actual2 = whoWon('rock', 'scissors');
    const expected2 = 'win';
    const actual3 = whoWon('rock', 'rock');
    const expected3 = 'draw';
    //Arrange
    // Set up your arguments and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, actual2, expected2, actual3, expected3);
});

