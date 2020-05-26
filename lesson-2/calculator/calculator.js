const readline = require('readline-sync');
// Get the first number from the user
console.log('Welcome to Calculator!!!!');
console.log('What is the first number?');
let number1 = readline.question();
// Get the second number from the user
console.log("What's the second number?");
let number2 = readline.question();
// Get the operation from the user
console.log('What operation would you like to perform?');
console.log('1)Add, 2)Subtract,3)Multiply, or 4)Divide?');
let operation = readline.question();
// Perform the calculation
let output;
number1 = Number(number1);
number2 = Number(number2);

if (operation === '1') {
  output = number1 + number2;
} else if (operation === '2') {
  output = number1 - number2;
} else if (operation === '3') {
  output = number1 * number2;
} else if (operation === '4') {
  output = number1 / number2;
}
// Print the result in the console

console.log(`The result is: ${output}`);
