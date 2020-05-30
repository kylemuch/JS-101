//In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

//How can we add multiple items to our array? ('Dino' and 'Hoppy')

//My solution: We can push multiple strings with push by separating them with commas
flintstones.push('Dino', 'Hoppy', 'Remoulade')

console.log(flintstones);