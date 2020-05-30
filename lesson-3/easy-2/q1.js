let advice = "Few things important in life are as important as house training your pet important dinosaur.";


let replacer = word => word === 'important' ? 'urgent' : word;

//this uses a regex as the first argument, this looks for all the instances of 'important in the string', passing in only a string only replaces the first instance of the string. 
advice = advice.replace(/important/g, 'urgent');

console.log(advice);