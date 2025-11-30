// Rock  paper scissors game logic

// create getComputerChoice function
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// create getHumanChoice function
function getHumanChoice() {
  return prompt('please enter your choice').toLocaleLowerCase();
}

// let computerScore = 0;
// let humanScore = 0;

// create playRound function
// function playRound(human, computer) {
//   human = getHumanChoice();
//   computer = getComputerChoice();
//   // game logic
//   if (human === computer) {
//     console.log('No winner No loser');
//   } else if (human === 'rock' && computer === 'paper') {
//     computerScore += 1;
//     console.log('You lose paper beats rock');
//   } else if (human === 'paper' && computer === 'rock') {
//     humanScore += 1;
//     console.log('you win paper beats rock');
//   } else if (human === 'rock' && computer === 'scissors') {
//     humanScore += 1;
//     console.log('you win rock beats scissors');
//   } else if (human === 'scissors' && computer === 'rock') {
//     computerScore += 1;
//     console.log('you lose rock beats scissors');
//   } else if (human === 'paper' && computer === 'scissors') {
//     computerScore += 1;
//     console.log('you lose scissors beats paper');
//   } else if (human === 'scissors' && computer === 'paper') {
//     humanScore += 1;
//     console.log('you win scissors beats paper');
//   }
// }

//playRound();

// create playGame function
function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(human, computer) {
    human = getHumanChoice();
    computer = getComputerChoice();
    // game logic
    if (human === computer) {
      console.log('No winner No loser');
    } else if (human === 'rock' && computer === 'paper') {
      computerScore += 1;
      console.log('You lose paper beats rock');
    } else if (human === 'paper' && computer === 'rock') {
      humanScore += 1;
      console.log('you win paper beats rock');
    } else if (human === 'rock' && computer === 'scissors') {
      humanScore += 1;
      console.log('you win rock beats scissors');
    } else if (human === 'scissors' && computer === 'rock') {
      computerScore += 1;
      console.log('you lose rock beats scissors');
    } else if (human === 'paper' && computer === 'scissors') {
      computerScore += 1;
      console.log('you lose scissors beats paper');
    } else if (human === 'scissors' && computer === 'paper') {
      humanScore += 1;
      console.log('you win scissors beats paper');
    }
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if (humanScore > computerScore) {
    console.log(`Final result Human Wins ${humanScore} To ${computerScore}`);
  } else {
    console.log(`Final result computer wins ${computerScore} To ${humanScore}`);
  }
}

//playGame();