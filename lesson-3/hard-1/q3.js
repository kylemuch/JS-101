// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// function messWithVars(one, two, three) {
//   // one = ["one"]
//   // two = ["two"]
//   // three = ["three"]
//   one = two; // ["two"]
//   two = three; // ["three"]
//   three = one; // ["two"]

//   console.log(one, two, three);
// }

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // "two"
// console.log(`two is: ${two}`); // "three"
// console.log(`three is: ${three}`); // "two"

//thie prints one is: one, two is : two, three is: three
//the variables are shadowed from the global scope but the changes are only made in the function scope. Then when they are declared after it changes all of the values.

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// this still has no effect on global variables. You're reassigning what the local variables in the function reference but not what the global variables are referencing.

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//this does mutate the arrays referenced. we are passing in references to the arrays in the global scope and then calling a mutative method on them. 