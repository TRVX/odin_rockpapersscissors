const possibleOutputs = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {

  var computerPlayOutput = possibleOutputs[Math.floor(Math.random()*3)];
  return computerPlayOutput

}

let playerScore = 0;
let computerScore = 0;

const gameStatusDOMTag = document.getElementById("game-status");

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {

    playerScore++
    computerScore++
    gameStatusDOMTag.innerHTML = `It's a tie! You both chose ${playerSelection}`;

  } else if (playerSelection === "ROCK"){

    if (computerSelection === "PAPER") {

      computerScore++
      gameStatusDOMTag.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`;

    } else if (computerSelection === "SCISSORS") {

      playerScore++
      gameStatusDOMTag.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`

    }
  } else if (playerSelection === "PAPER") {

    if (computerSelection === "ROCK") {

      playerScore++
      gameStatusDOMTag.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`

    } else if (computerSelection === "SCISSORS") {

      computerScore++
      gameStatusDOMTag.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`;

    }
  } else if (playerSelection === "SCISSORS") {

    if (computerSelection === "ROCK") {

      computerScore++
      gameStatusDOMTag.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`;

    } else if (computerSelection === "PAPER") {

      playerScore++
      gameStatusDOMTag.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`

    }
  }
}

const playerScoreDOMTag = document.getElementById("player-score");
const computerScoreDOMTag = document.getElementById("computer-score");

function game() {
  document.getElementById("rock-player-selection").addEventListener("click", function(){

    playRound("ROCK", computerPlay());
    playerScoreDOMTag.innerHTML = `Player Score: ${playerScore}`;
    computerScoreDOMTag.innerHTML = `Computer Score: ${computerScore}`;

  });
  document.getElementById("paper-player-selection").addEventListener("click", function(){

    playRound("PAPER", computerPlay());
    playerScoreDOMTag.innerHTML = `Player Score: ${playerScore}`;
    computerScoreDOMTag.innerHTML = `Computer Score: ${computerScore}`;

  });
  document.getElementById("scissors-player-selection").addEventListener("click", function(){

    playRound("SCISSORS", computerPlay());
    playerScoreDOMTag.innerHTML = `Player Score: ${playerScore}`;
    computerScoreDOMTag.innerHTML = `Computer Score: ${computerScore}`;

  });

  if (playerScore === computerScore) {

    console.log(`The game was tied! No-one wins this game of Rock, Paper and Scissors! You scored: ${playerScore} and Computer scored ${computerScore}`);

  } else if (playerScore > computerScore) {

    console.log(`You win! Computer loses this game of Rock, Paper and Scissors! You scored: ${playerScore} and Computer scored ${computerScore} `);

  } else if (computerScore > playerScore) {

    console.log(`Computer wins! You lose this game of Rock, Paper and Scissors! You scored: ${playerScore} and Computer scored ${computerScore} `);

  }
}

game();
