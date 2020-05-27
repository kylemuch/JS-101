const readLine = require('readline-sync');
const MESSAGEOBJ = require('./calculator_messages.json');


console.log();

let runCalculator = () => {

  let prompt = (message) => {
  console.log(`=> ${message}`);
  };

    let invalidNumber = num => num.trimStart() === "" || Number.isNaN(Number(num));

  prompt(MESSAGEOBJ.welcome);


    prompt(MESSAGEOBJ.getFirst);

    let number1 = readLine.question();

    while (invalidNumber(number1)) {
      prompt(MESSAGEOBJ.getFirst);
      number1 = readLine.question();
    }
    prompt(MESSAGEOBJ.getSecond);
    let number2 = readLine.question();

    while (invalidNumber(number2)) {
      prompt(MESSAGEOBJ.invalidNum);
      number2 = readLine.question();
    }

    prompt(MESSAGEOBJ.getOperator);
    prompt('1) Add 2) Subtract 3) Multiply 4) Divide');

    let operator = readLine.question();

    while (!['1','2','3','4'].includes(operator)) {
      console.log(operator);
      prompt(MESSAGEOBJ.operators);
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

    prompt(`The result is: ${output}`);

    prompt(MESSAGEOBJ.anotherCalc);

    let anotherCalculation = readLine.question();

    while (!['yes', 'no'].includes(anotherCalculation)) {
      prompt(MESSAGEOBJ.invalidEntry);
      anotherCalculation = readLine.question();
    }

    if (anotherCalculation === 'yes') {
      prompt(MESSAGEOBJ.great);
      runCalculator();
    } else {
      prompt(MESSAGEOBJ.thanks);
    }
}

runCalculator();