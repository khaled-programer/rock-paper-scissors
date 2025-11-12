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