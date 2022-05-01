const possibleOutputs = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
  var computerPlayOutput = possibleOutputs[Math.floor(Math.random()*3)];
  return computerPlayOutput
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    playerScore++
    computerScore++
    console.log(`It's a tie! You both chose ${playerSelection}.`);
  } else if (playerSelection === "ROCK"){
    if (computerSelection === "PAPER") {
      computerScore++
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else if (computerSelection === "SCISSORS") {
      playerScore++
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
  } else if (playerSelection === "PAPER") {
    if (computerSelection === "ROCK") {
      playerScore++
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else if (computerSelection === "SCISSORS") {
      computerScore++
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
  } else if (playerSelection === "SCISSORS") {
    if (computerSelection === "ROCK") {
      computerScore++
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else if (computerSelection === "PAPER") {
      playerScore++
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Choose between Rock, Paper and Scissors:")
    playRound(playerChoice.toUpperCase(), computerPlay());
  }
  if (playerScore === computerScore) {
    console.log(`The game was tied! No-one wins this game of Rock, Paper and Scissors! You scored: ${playerScore} and Computer scored ${computerScore}`);
  } else if (playerScore > computerScore) {
    console.log(`You win! Computer loses this game of Rock, Paper and Scissors! You scored: ${playerScore} and Computer scored ${computerScore} `);
  } else if (computerScore > playerScore) {
    console.log(`Computer wins! You lose this game of Rock, Paper and Scissors! You scored: ${playerScore} and Computer scored ${computerScore} `);
  }
}

game();
