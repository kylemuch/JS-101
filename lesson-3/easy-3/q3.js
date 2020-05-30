//What will the following code output?

let str1 = "hello there";
//str1 is now "hello there"
let str2 = str1;
//str2 is now "hello there"
str2 = "goodbye!";
//str2 has been reassigned, str1 remains "hello there"
console.log(str1)
//= "hello there"

//strings are primitives. primitives are immutable and passed by value. this means that a copy of the value is passed when it is used for assignment.
