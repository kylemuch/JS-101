//Will the following functions return the same results ?

  function first() {
    return {
      prop1: "hi there"
    };
  }

function second() {
  return

  "fucker";
}

console.log(first());
console.log(second());

//these have different return values. first returns the simple object whereas second returns undefined. apparently the expression you're returning must be on the same line. This occurs becaue semilcolons are optional. The engine decides where to put them based on convention. If you place a return statement, the JavaScript interpreter will place a ; on the same line as the statement so anything on the line after it will not be returned. 