// export function getRockPaperOrScissors(someNumber) {
//     // if (someNumber = )
// }
export function getRandomThrow() {
    const getRandomThrow = Math.ceil(Math.random() * 3);
    let computerThrow;
    if (getRandomThrow === 1) {
        computerThrow = 'rock';

    }
    if (getRandomThrow === 2) {
        computerThrow = 'paper';
    } else if (getRandomThrow === 3) {
        computerThrow = 'scissors';
    }
    return computerThrow;
}

export function