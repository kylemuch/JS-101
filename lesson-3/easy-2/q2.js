//The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending.Both of these methods mutate the original array as shown below.Write two distinct ways of reversing the array without mutating the original array.Use reverse for the first solution, and sort for the second.


let nonMutatingReverse = arr => {
  let newArr = [];

  let i;
  for (i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

let myArr = [1,2,'plumbus',4,5]

let nonMutatingReverseForEach = arr => {
  let newArr = [];

  arr.forEach(el => newArr.unshift(el));

  return newArr;
}


const reducer = (accumulator, currentValue) => {
  accumulator.push(currentValue)
}


console.log(myArr.reduce((accumulator, currentValue) => ([currentValue, ...accumulator]), []));

let nameArr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let newArr = [].concat(...nameArr);

let reducerArr = nameArr.reduce((acc, val) => {
  return acc.concat(val);
}, []);

console.log(reducerArr)
// 