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
    console.log(`It's a tie! You both chose ${playerSelection}.`);
  } else if (playerSelection === "Rock"){
    if (computerSelection === "Paper") {
      computerScore++
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else if (computerSelection === "Scissors") {
      playerScore++
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerScore++
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else if (computerSelection === "Scissors") {
      computerScore++
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      computerScore++
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else if (computerSelection === "Paper") {
      playerScore++
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(prompt("Choose Rock, Paper or Scissors:"), computerPlay());
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
