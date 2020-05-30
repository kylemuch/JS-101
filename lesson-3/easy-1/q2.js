//How can you determine whether a given string ends with an exclamation mark(!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?";

// My solution
console.log(str2[str2.length - 1] === true);

// solution
str1.endsWith("!");
// apparently there is a built-in string instance method endsWith, good to know.

