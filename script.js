// Rock  paper scissors game logic

// create variables
const btns = document.querySelectorAll('.btns button');
const humanScore = document.querySelector('.human-score span');
const computerScore = document.querySelector('.computer-score span');
const showComputerChoice = document.querySelector('.computer-choice');
const humanChoice = document.querySelector('.human-choice');
const result = document.querySelector('#result');

// create getComputerChoice function
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return 'Rock';
  } else if (choice === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}


let hScore = 0;
let cScore = 0;
// game logic
btns.forEach((button) => {
  button.addEventListener('click', function () {
    let hChoice = button.textContent;
    let cChoice = getComputerChoice();
    humanChoice.textContent = hChoice;
    showComputerChoice.textContent = cChoice;
    //console.log(hChoice);
    //console.log(cChoice);

    if (hChoice === cChoice) {
      humanScore.textContent = hScore;
      computerScore.textContent = cScore;
    } else if (hChoice === 'Rock' && cChoice === 'Paper') {
      cScore += 1;
      humanScore.textContent = hScore;
      computerScore.textContent = cScore;
    } else if (hChoice === 'Paper' && cChoice === 'Rock') {
      hScore += 1;
      humanScore.textContent = hScore;
      computerScore.textContent = cScore;
    } else if (hChoice === 'Rock' && cChoice === 'Scissors') {
      hScore += 1;
      humanScore.textContent = hScore;
      computerScore.textContent = cScore;
    } else if (hChoice === 'Scissors' && cChoice === 'Rock') {
      cScore += 1;
      humanScore.textContent = hScore;
      computerScore.textContent = cScore;
    } else if (hChoice === 'Paper' && cChoice === 'Scissors') {
      cScore += 1;
      humanScore.textContent = hScore;
      computerScore.textContent = cScore;
    } else if (hChoice === 'Scissors' && cChoice === 'Paper') {
      hChoice += 1;
      humanScore.textContent = hScore;
      computerScore.textContent = cScore;
    }

    if (hScore === 5) {
      result.textContent = 'Human Wins';
      btns.forEach((btn) => {
        btn.disabled = true;
      });
    } else if (cScore === 5) {
      result.textContent = 'Computer Wins';
      btns.forEach((btn) => {
        btn.disabled = true;
      });
    }
  });
});

// create getHumanChoice function
//function getHumanChoice() {
//  return prompt('please enter your choice').toLocaleLowerCase();
//}

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
// function playGame() {
//   let computerScore = 0;
//   let humanScore = 0;

//   function playRound(human, computer) {
//     human = getHumanChoice();
//     computer = getComputerChoice();
//     // game logic
//     if (human === computer) {
//       console.log('No winner No loser');
//     } else if (human === 'rock' && computer === 'paper') {
//       computerScore += 1;
//       console.log('You lose paper beats rock');
//     } else if (human === 'paper' && computer === 'rock') {
//       humanScore += 1;
//       console.log('you win paper beats rock');
//     } else if (human === 'rock' && computer === 'scissors') {
//       humanScore += 1;
//       console.log('you win rock beats scissors');
//     } else if (human === 'scissors' && computer === 'rock') {
//       computerScore += 1;
//       console.log('you lose rock beats scissors');
//     } else if (human === 'paper' && computer === 'scissors') {
//       computerScore += 1;
//       console.log('you lose scissors beats paper');
//     } else if (human === 'scissors' && computer === 'paper') {
//       humanScore += 1;
//       console.log('you win scissors beats paper');
//     }
//   }

//   playRound();
//   playRound();
//   playRound();
//   playRound();
//   playRound();

//   if (humanScore > computerScore) {
//     console.log(`Final result Human Wins ${humanScore} To ${computerScore}`);
//   } else {
//     console.log(`Final result computer wins ${computerScore} To ${humanScore}`);
//   }
// }

// //playGame();