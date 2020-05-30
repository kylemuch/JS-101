//Determine whether the name Dino appears in the strings below-- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// my solution
console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

// my solution was correct, 2 other solutions:
str1.match('Dino') !== null; //false
// if there is a match, .match returns an array with the the search term, index, and original string. It returns null if the string is not present in the string you're searching.

str1.indexOf('Dino') > -1 // false
// indexOf returns -1 if the string doesn't exist in the caller or the index where the first instance of the phrase starts if it does contain it.
