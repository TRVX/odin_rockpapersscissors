const possibleOutputs = ["Rock", "Paper", "Scissors"];

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
    console.log(`It's a tie! You both chose ${playerSelection}. Current score is ${playerScore} and ${computerScore}`);
  } else if (playerSelection === "Rock"){
    if (computerSelection === "Paper") {
      computerScore++
      console.log(`You lose! ${computerSelection} beats ${playerSelection}. Current score is ${playerScore} and ${computerScore}`);
    } else if (computerSelection === "Scissors") {
      playerScore++
      console.log(`You win! ${playerSelection} beats ${computerSelection}. Current score is ${playerScore} and ${computerScore}`);
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerScore++
      console.log(`You win! ${playerSelection} beats ${computerSelection}. Current score is ${playerScore} and ${computerScore}`);
    } else if (computerSelection === "Scissors") {
      computerScore++
      console.log(`You lose! ${computerSelection} beats ${playerSelection}. Current score is ${playerScore} and ${computerScore}`);
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      computerScore++
      console.log(`You lose! ${computerSelection} beats ${playerSelection}. Current score is ${playerScore} and ${computerScore}`);
    } else if (computerSelection === "Paper") {
      playerScore++
      console.log(`You win! ${playerSelection} beats ${computerSelection}. Current score is ${playerScore} and ${computerScore}`);
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(prompt("Choose Rock, Paper or Scissors:"), computerPlay());
  }
}

game();
