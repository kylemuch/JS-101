function lessThan(upperLimit) {
  let numbers = [];
  let candidate = 0;

  do {
    candidate++;
    numbers.push(candidate);
  } while (candidate < upperLimit - 1);

  return numbers;
}

let numsArr = lessThan(5);

let filteredArr = numsArr.filter(num => num);

console.log(filteredArr);
console.log(numsArr);

console.log(filteredArr === numsArr);

let result = [1, 2, 3, 4, 5].filter(num => num *= 100000);

console.log(result);






