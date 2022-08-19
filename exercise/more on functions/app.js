const startGameBtn = document.getElementById('start-game-btn');
const result = document.getElementById('result');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;
const RESULT_DRAW = 'IT\'S A DRAW';
const RESULT_PLAYER_WINS = 'THE PLAYER WINS';
const RESULT_COMP_WINS = 'THE COMPUTER WINS';
let gameIsRunning = false;

const getPlayerChoice = function(){

  const selection = prompt('ROCK, PAPER or SCISSORS?', '').toUpperCase();

  if (selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS) {
      alert(`Invalid selection input. We chose ${DEFAULT_PLAYER_CHOICE} for you`);
      return; 
    }

    return selection;
};

const getTheWinner = (pChoice, cChoice = DEFAULT_PLAYER_CHOICE) => {
    if (pChoice === cChoice) {
        return RESULT_DRAW;
    } else if (pChoice === ROCK && cChoice === PAPER || 
               pChoice === SCISSORS && cChoice === ROCK || 
               pChoice === PAPER && cChoice === SCISSORS ) {
        return RESULT_COMP_WINS;
    } else {
        return RESULT_PLAYER_WINS;
    }
}

const computerChoice = function(){

    const randomValue = Math.random();

    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER
    } else {
        return SCISSORS;
    }

};




startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }

    gameIsRunning = true;
    console.log('Starting the game...'); 
    const playerSelection = getPlayerChoice();
    const computerSelection = computerChoice();
    let winner;

    if (playerSelection) {
        winner = getTheWinner(playerSelection, computerSelection);
    } else {
        winner = getTheWinner(computerSelection);
    }

    let message = `You picked ${playerSelection || DEFAULT_PLAYER_CHOICE}, computer picked ${computerSelection} and you `;

    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }


    console.log(winner);
    alert(message);
    result.innerHTML = winner;
});

//not related to the Game:

const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number)? 0 : number;
    };

    let sum = 0;

    for (const num of numbers) {

        sum+= validateNumber(num);
    }

    return resultHandler(sum);
};

const showResult = (result) => {
  alert('The result after getting all numbers is ' + result);
};

sumUp(showResult, 2, 4, 4);

