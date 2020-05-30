//What will the following code output ?

console.log(typeof ([1,2,3] + [4,5]));

// this code will log "1,2,34,5"
// the arrays will be coerced into strings and they'll be concatenated. + does NOT concatenate arrays in JavaScript. 
