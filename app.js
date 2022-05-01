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

    gameStatusDOMTag.innerHTML = `It's a tie! You both chose ${playerSelection}`;

  } else if (playerSelection === "ROCK"){

    if (computerSelection === "PAPER") {

      computerScore++
      gameStatusDOMTag.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`;

    } else if (computerSelection === "SCISSORS") {

      playerScore++
      gameStatusDOMTag.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;

    }
  } else if (playerSelection === "PAPER") {

    if (computerSelection === "ROCK") {

      playerScore++
      gameStatusDOMTag.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;

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
const gameResultsDOMTag = document.getElementById("game-results");
const rockPlayerButton = document.getElementById("rock-player-selection");
const paperPlayerButton = document.getElementById("paper-player-selection");
const scissorsPlayerButton = document.getElementById("scissors-player-selection");

function endGame() {

  if (playerScore === computerScore) {

    gameResultsDOMTag.innerHTML = "Game Tied! No-one wins this game of Rock, Paper and Scissors!"
    playerScoreDOMTag.innerHTML = `Player Score: ${playerScore}`;
    computerScoreDOMTag.innerHTML = `Computer Score: ${computerScore}`;
    rockPlayerButton.remove();
    paperPlayerButton.remove();
    scissorsPlayerButton.remove();

  } else if (playerScore > computerScore) {

    gameResultsDOMTag.innerHTML = "You won! Computer loses this game of Rock, Paper and Scissors! Congratulations!"
    playerScoreDOMTag.innerHTML = `Player Score: ${playerScore}`;
    computerScoreDOMTag.innerHTML = `Computer Score: ${computerScore}`;
    rockPlayerButton.remove();
    paperPlayerButton.remove();
    scissorsPlayerButton.remove();

  } else if (computerScore > playerScore)  {

    gameResultsDOMTag.innerHTML = "You lost! Computer wins this game of Rock, Paper and Scissors! Better Luck next time!"
    playerScoreDOMTag.innerHTML = `Player Score: ${playerScore}`;
    computerScoreDOMTag.innerHTML = `Computer Score: ${computerScore}`;
    rockPlayerButton.remove();
    paperPlayerButton.remove();
    scissorsPlayerButton.remove();

  }

}

function game() {

  document.getElementById("rock-player-selection").addEventListener("click", function(){

    playRound("ROCK", computerPlay());
    console.log(playerScore);

    if (playerScore === 5 || computerScore === 5) {

      endGame();

    }

  });
  document.getElementById("paper-player-selection").addEventListener("click", function(){

    playRound("PAPER", computerPlay());
    console.log(playerScore);

    if (playerScore === 5 || computerScore === 5) {

      endGame();

    }

  });
  document.getElementById("scissors-player-selection").addEventListener("click", function(){

    playRound("SCISSORS", computerPlay());
    console.log(playerScore);

    if (playerScore === 5 || computerScore === 5) {

      endGame();

    }

  });

}

game();
