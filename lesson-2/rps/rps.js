const readLine = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
let choice = readLine.question();

while (!VALID_CHOICES.includes(choice)) {
  prompt("That's not a valid choice.");
  choice = readLine.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`You chose ${choice}, computer chose ${computerChoice}`);

if ((choice === 'rock' && computerChoice === 'scissors') ||
  (choice === 'paper' && computerChoice === 'rock') ||
  (choice === 'scissors' && computerChoice === 'paper')) {
  prompt('You win!');
} else if ((choice === 'rock' && computerChoice === 'paper') ||
  (choice === 'paper' && computerChoice === 'scissors') ||
  (choice === 'scissors' && computerChoice === 'rock')) {
  prompt('Computer wins!');
} else {
  prompt("It's a tie")
}

prompt('Do you want to play again (y/n)?');
let answer = readLine.question().toLowerCase();
while (answer[0] !== 'n' && answer[0] !== 'y') {
  prompt('Please enter "y" or "n".')
  answer = readLine.question().toLowerCase();
}
