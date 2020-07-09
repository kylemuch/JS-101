function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  // buffer is now a reference to the object we pass in and mutates it.
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}


let fakeArr = [1,2,3,4];
let otherArr = fakeArr.slice();

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  console.log(buffer === otherArr)
  buffer = buffer.concat(newElement);
  console.log(buffer === otherArr)
  // we reassign buffer to the new array that concat returns and do not mutate buffer.
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// console.log(addToRollingBuffer1(fakeArr, 3, 'hi'));
console.log(addToRollingBuffer2(otherArr, 3, 'hi'));
// console.log(fakeArr);
// console.log(otherArr);

// the return values for these functions are the same, however, the 1st versioni mutates the buffer you pass in whereas the second one doesn't. You're calling push directly on the buffer in 1 but reassign
