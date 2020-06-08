//Given the following data structure, sort the array so that the sub - arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let sumArrA = a.filter(el => el % 2 ===1).reduce((acc, curr) => acc + curr);
  let sumArrB = b.filter(el => el % 2 === 1).reduce((acc, curr) => acc + curr);

  return sumArrA - sumArrB;
})

console.log(arr);
