//Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

//For this practice problem, write a program that creates the following output 10 times, with each line indented 1 space to the right of the line above it:

let theString = "The Flintstones Rock!";

let padding = 1;

while (padding <= 10) {
  theString = theString.padStart(theString.length + 1, " ");
  padding += 1;
  console.log(theString);
}

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + theString);
}