// Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

//Create an array from this object that contains only two elements: Barney's name and Barney's number:

//my solution
let barneyArr = Object.entries(flintstones);
//this works but only because I'm assuming the array will be in the same order as the object is written and there may not be a way to know that.

let barneyArr2 = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();

//we use filter to create an array containing only one element, the array with the name Barney. We then call shift() on that array which returns the element we want.

console.log(barneyArr2)


//ARE YOU RUNNING FUCKING NODE OR CODE!!!!????
//ARE YOU RUNNING FUCKING NODE OR CODE!!!!????
//ARE YOU RUNNING FUCKING NODE OR CODE!!!!????
//ARE YOU RUNNING FUCKING NODE OR CODE!!!!????
//ARE YOU RUNNING FUCKING NODE OR CODE!!!!????