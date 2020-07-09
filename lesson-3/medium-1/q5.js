let kyle = ['kyle', 'much'];

let changeName = obj => {
  console.log(obj);
  obj.concat(['plumbus']);
  console.log(obj)
}

// console.log(changeName(kyle));
// console.log(kyle);

changeName(kyle);