// import readline
const readLine = require('readline-sync');
// Get the total amount of the loan and save it to a variable
let prompt = (message) => console.log(`===> ${message}`);
prompt('Welcome to the monthly mortgage payment calculator!');

prompt('Enter the total amount of the loan rounded to the nearest dollar.');
let loanAmount = readLine.question();
loanAmount = parseInt(loanAmount, 10);

while (!loanAmount) {
  prompt('Invalid entry, you must enter a number for the loan amount');
  loanAmount = readLine.question();
  loanAmount = parseInt(loanAmount, 10);
}
// Get the APR and save it to a variable
prompt("Enter the APR for the loan. If it's 5% just enter 5, 5.5% enter 5.5");
let apr = readLine.question();
apr = parseFloat(apr);

while (!apr) {
  prompt(
    "Invalid, Enter the APR. If it's 5% just enter 5, 5.5% enter 5.5"
  );
  apr = readLine.question('');
  apr = parseFloat(apr);
}
// convert and save APR to a monthly rate
let monthlyAPR = apr / 12;
monthlyAPR /= 100;

// Get the loan duration in years
prompt('Please enter the duration of the loan in years.');
let durationYears = readLine.question();
durationYears = parseInt(durationYears, 10);

while (!durationYears) {
  prompt('Invalid entry, please enter the duration of the loan in years.');
  durationYears = readLine.question();
  durationYears = parseInt(durationYears, 10);
}
// convert loan duration to months
let durationMonths = durationYears * 12;

// perform the calculation
let monthlyPayment = loanAmount * (monthlyAPR / (1 - Math.pow(1 + monthlyAPR, -durationMonths)));
// let m = p * (j / (1 - Math.pow((1 + j), (-n))));
prompt(`Total amount borrowed: $${loanAmount}`);
prompt(`Loan Apr: ${apr.toFixed(2)}%`);
prompt(`Length of repayment: ${durationYears} years or ${durationMonths} months`);
prompt(`Your loan payment will be $${monthlyPayment.toFixed(2)} per month.`);
// return the monthly payment
