//Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";
//Return a new string that swaps the case of all of the letters:

//`tHE mUNSTERS ARE CREEPY AND SPOOKY.`
// let newString = "";

// for (let i = 0; i < munstersDescription.length; i++) {
//   if (munstersDescription[i] === munstersDescription[i].toUpperCase()) {
//     newString += munstersDescription[i].toLowerCase();
//   } else {
//     newString += munstersDescription[i].toUpperCase();
//   }
// }

// console.log(newString);

let newString = munstersDescription.split("").map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

console.log(newString);