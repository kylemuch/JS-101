//What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// initialize an array containg two objects and 3 numbers
let arr2 = arr1.slice();
// .slice() returns a shallow copy of the array. passing in no args copies the entire arr.
arr2[0].first = 42;
// this changes arr2, does nothing to arr1 WRONGOWRONGO
console.log(arr1);
// arr1 is unchanged. WRONGOWRONGO

//arr2 doesn't reference the array in arr1, it is a different object. However, the objects referenced in arr1 are the same objects referenced in arr2 so any changes made to the objects referenced in both arr1 and arr2 will be reflected in both arrays. Shallow copies keep the reference to any objects referenced with the array they copy. A deep copy would create a new instance of the object but .slice doesn't do that. 

