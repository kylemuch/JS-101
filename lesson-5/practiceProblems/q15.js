//Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// We need an array so we going to use map on arr
// we need to access the each array in each object, i think using a for/in loop makes sense there.
// We can then access each array and use every to test if every value in the array is even.
// if every returns false, we can delete that property

let allEvens = arr.map(obj => {

  for (key in obj) {
    if (obj[key].every(el => el % 2 === 0)) {
      continue;
    } else {
      delete obj[key];
    }
  }

  return obj;
  
})

console.log(allEvens);
