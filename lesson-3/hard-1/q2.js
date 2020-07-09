// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object); // => {first: [1, 2]}

//numArray is a reference to the same array that is in object. any changes to numArray will be reflected in object.

// let object2 = { first: [1] };
// let numArray2 = object2["first"].slice();
// numArray2.push(2);


// you can make a copy of the array with .slice() and then modify that to avoid mutating object2

let object2 = {first: [1]};
let numArray2 = object2["first"].concat();
numArray2.push(2);

console.log(numArray2); //  => "[1, 2]"
console.log(object2);

// you can also make a shallow copy of an array using .concat() and then modify that. 