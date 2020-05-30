//What will the following code output ?
console.log(false == '0');
console.log(false === '0');

// true
// false
// in the first statement, since we use ==, the '0' will be coerced to a number, then to a boolean.
// in statement two, the operands are two different types so false will immediately be returned.

