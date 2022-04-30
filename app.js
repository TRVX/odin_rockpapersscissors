const possibleOutputs = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  var aiSelection = possibleOutputs[Math.floor(Math.random()*3)];
  return aiSelection
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`It's a tie! You both chose ${playerSelection}`);
  } else if (playerSelection === "Rock"){
    if (computerSelection === "Paper") {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }  else if (computerSelection === "Scissors") {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (computerSelection === "Scissors") {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === "Paper") {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
  }
}

function game() {

}
