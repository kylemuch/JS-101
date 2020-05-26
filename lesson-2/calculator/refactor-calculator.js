const readLine = require('readline-sync');
const messageObj = require('./calculator_messages.json');

console.log(messageObj);

let runCalculator = () => {

  let prompt = (message) => {
  console.log(`=> ${message}`);
  };

    let invalidNumber = num => num.trimStart() === "" || Number.isNaN(Number(num));

    prompt('Welcome to Calculator!');


    prompt('What\'s the first number?');

    let number1 = readLine.question();

    while (invalidNumber(number1)) {
      prompt('Hmmm... that\'s not a valid number.');
      number1 = readLine.question();
    }
    prompt('What\'s the second number?');
    let number2 = readLine.question();

    while (invalidNumber(number2)) {
      prompt('Hmmm... that\'s not a valid number.');
      number2 = readLine.question();
    }

    prompt('Which operator which you like to use?');
    prompt('1) Add 2) Subtract 3) Multiply 4) Divide');

    let operator = readLine.question();

    while (!['1','2','3','4'].includes(operator)) {
      console.log(operator);
      prompt('Must enter either 1,2,3,4.');
      operator = readLine.question();
    }

    number1 = Number(number1);
    number2 = Number(number2);

    let output;

    switch (operator) {
      case '1':
        output = number1 + number2;
        break;
      case '2':
        output = number1 - number2;
        break;
      case '3':
        output = number1 * number2;
        break;
      case '4':
        output = number1 / number2;
        break;
      default:
        break;
    }

    prompt(`The answer is: ${output}`);

    prompt('Would you like to perform another calculation? Please enter yes or no.');

    let anotherCalculation = readLine.question();

    while (!['yes', 'no'].includes(anotherCalculation)) {
      prompt('You must enter either yes or no.');
      anotherCalculation = readLine.question();
    }

    if (anotherCalculation === 'yes') {
      prompt('Great! Let\'s perform another calculation!');
      runCalculator();
    } else {
      prompt('Thanks for using calcuator! Goodbye.');
    }
}

runCalculator();