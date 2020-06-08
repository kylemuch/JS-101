//Given the following data structure, return a new array with the same structure, but with the subarrays ordered-- (alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortedArr = arr.map(arr => {
  arr = arr.slice();

  if (arr[0].typeof === 'number') {
    arr.sort((a, b) => b - a);
  } else {
    arr.sort().reverse();
  }
  console.log(arr);

})

// console.log(sortedArr);
