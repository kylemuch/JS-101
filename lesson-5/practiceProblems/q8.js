//Using the forEach method, write some code to output all vowels from the strings in the arrays.Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

for (key in obj) {
  obj[key].join("").split("").forEach(arr => {
    if (['a', 'e', 'i', 'o', 'u'].includes(arr)) {
      console.log(arr[0]);
    }
  })
}


