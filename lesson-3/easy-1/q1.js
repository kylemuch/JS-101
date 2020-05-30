//Will the code below raise an error ?

// No, you can set any index of an array even if the indexes before it are empty.

let numbers = [1, 2, 3];
numbers[6] = 5;

console.log(numbers);

numbers[4];  // what will this line return?
// undefined. THE INDEX IS NOT SET TO UNDEFINED THOUGH. if you iterate through the array and log the items nothing will show up. It will return undefined but the indexes are actually "empy items". Indexes explicitly set to undefined are actuall undefined however and you can work with the undefined value while iterating through the array.
