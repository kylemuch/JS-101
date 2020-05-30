//Back in the stone age(before CSS), we used spaces to align things on the screen.If we have a 40 - character wide table of Flintstone family members, how can we center the following title above the table with spaces ?

let title = "Flintstone Family Members";

let centerPrinter = function(string){
  let emptyChars = 40 - string.length
  let leftPadding = Math.ceil(emptyChars / 2);

  let i;
  let padding = "";

  for (i = leftPadding; i >= 0; i--) {
    padding += " ";
  }

  return padding + string;
}

console.log(centerPrinter(title));

let centerPrinterPad = string => {
  let leftPadding = Math.ceil((40 - string.length) / 2);
  return string.padStart(leftPadding + string.length, " ");
}

console.log(centerPrinterPad(title));