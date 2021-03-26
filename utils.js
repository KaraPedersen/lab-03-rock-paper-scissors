// export function getRockPaperOrScissors(someNumber) {
//     // if (someNumber = )
// }
export function getRandomThrow() {
    const getRandomThrow = Math.ceil(Math.random() * 3); + 1;

    let computerThrow;

    if (getRandomThrow === 1) {
        computerThrow = 'rock';
    }

    if (getRandomThrow === 2) {
        computerThrow = 'paper';
    }

    if (getRandomThrow === 3) {
        computerThrow = 'scissors';
    }

    return computerThrow;
}

export function whoWon(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (player === 'paper' && computer === 'rock') {
        return 'win';
    }
    if (player === 'paper' && computer === 'scissors') {
        return 'loose';
    }
    if (player === 'rock' && computer === 'paper') {
        return 'loose';
    }
    if (player === 'rock' && computer === 'scissors') {
        return 'win';
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'loose';
    }
    if (player === 'scissors' && computer === 'paper') {
        return 'win';
    }

}







// export function