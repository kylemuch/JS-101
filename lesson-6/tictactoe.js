const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const TO_WIN_SERIES = 5;
let currentPlayer = "computer";

const readline = require('readline-sync');

function prompt(string) {
  console.log('=====> ' + string);
}

function getFirstPlayer() {
  let player;

  while(true) {
    prompt("Who do you want to move first?");
    prompt("please choose 'player' or 'computer' ");
    player = readline.question().trim();

    if (player !== "player" && player !== "computer") {
      prompt('Invalid choice, please choose "player" or "computer"');
      player = readline.question().trim();
    } else {
      currentPlayer = player;
      break;
    }

  }
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[square] = ' ';
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = 'X';
}

function computerChoosesSquare(board) {

    if (detectThreat(board)) {
      board[detectThreat(board)] = COMPUTER_MARKER;
    } else {
      let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

      let square = emptySquares(board)[randomIndex];
      board[square] = COMPUTER_MARKER;
    }
}

function chooseASquare(board, player) {
  player === 'player' ? playerChoosesSquare(board) : computerChoosesSquare(board);
}

function alternatePlayer() {
  currentPlayer === 'player' ? currentPlayer = 'computer' : currentPlayer = 'player';
}


function boardFull(board) {
  return emptySquares(board).length === 0;
}

//detectThreat
// This is going to be a function that has access to the board and the array of winning Lines
// We will iterate over each array, filter each array down to only the elements that are HUMAN_MARKER, as soon as we find an array that has 2 of them in it, if the third square is " " then that is where the computer should move.
// This function will be called in the computerChoosesSquare function.
// If it doesn't return null, that will be where the computer will move, otherwise the computer will pick a random empty square.

function detectThreat(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let i = 0; i < winningLines.length; i++) {
    let xCounter = 0;
    let oCounter = 0;
    let emptyCounter = 0;
    let [sq1, sq2, sq3] = winningLines[i];
    let tempArr = [board[sq1], board[sq2], board[sq3]];

    xCounter = tempArr.filter(el => el === 'X').length;
    oCounter = tempArr.filter(el => el === 'O').length;
    emptyCounter = tempArr.filter(el => el === " ").length;

    if (oCounter === 2 && emptyCounter ===1) {
      let emptyIndex = tempArr.indexOf(" ");

      switch (emptyIndex) {
        case 0:
          return sq1;
          break;
        case 1:
          return sq2;
          break;
        case 2:
          return sq3;
          break;
        default:
          break;
    }

  }
    if (xCounter === 2 && emptyCounter === 1) {
       let emptyIndex = tempArr.indexOf(" ");

       switch (emptyIndex) {
         case 0:
          return sq1;
          break;
         case 1:
           return sq2;
            break;
         case 2:
           return sq3;
            break;
         default:
           break;
       }
    }

    if (board[5] === INITIAL_MARKER) {
      return 5;
    }

  }
}

function detectWinner(board) {

  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';

    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

// joinOr
// 1. joinOr is a function that takes 3 paramaters, an array, a delimiter and a joining word and returns a string
// 2. the last two arguments should default to "," and "or"
// 3. if the array is only 1 item in length, just return that item as a string
// 4. if the array is only 2 items in length, return the two elements joined by the joining word
//5. if the array is more than 3 items in length, add the delimiter between each element except the last two which will be separated by the joing word.

function joinOr(arr, delimiter = ",", joiner = "or") {
  if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return `${String(arr[0])} ${joiner} ${String(arr[1])}`;
  } else if (arr.length > 2) {
    let joinString = "";
    arr.forEach((el, i) => {
      if (i <= arr.length - 3) {
        joinString += `${el}${delimiter} `;
      } else if (i === arr.length - 2) {
        joinString += `${el}${delimiter} ${joiner} `;
      } else if (i === arr.length - 1) {
        joinString += `${el}`;
      }
    })
    return joinString;
  }
}

while (true) {
  let p1Score = 0;
  let p2Score = 0;

  getFirstPlayer();

  while (true){
    let board = initializeBoard();
    while (true) {
      displayBoard(board);
      chooseASquare(board, currentPlayer);
      alternatePlayer();
      if (someoneWon(board) || boardFull(board)) break;
    }

    // while (currentPlayer === 'computer') {

    //   computerChoosesSquare(board);
    //   if (someoneWon(board) || boardFull(board)) break;

    //   displayBoard(board);

    //   playerChoosesSquare(board);
    //   if (someoneWon(board) || boardFull(board)) break;
    // }

    displayBoard(board);

    if (someoneWon(board)) {
      detectWinner(board) === "Player" ? p1Score++ : p2Score++
      prompt(`${detectWinner(board)} won!`);
      console.log(`The score is currently Player: ${p1Score} to Computer: ${p2Score}`);
    } else {
      prompt("It's a tie!");
      console.log(`The score is currently Player: ${p1Score} to Computer: ${p2Score}`);
    }

    if (p1Score === TO_WIN_SERIES || p2Score === TO_WIN_SERIES) {
      if (p1Score === TO_WIN_SERIES) {
        console.log(`Congratulations HUMAN, you've won the series with ${TO_WIN_SERIES} wins.`)
        break;
      } else {
        console.log(`Congratulations COMPUTER BEEP BOOP, you've won the series with ${TO_WIN_SERIES} wins.`)
        break;
      }
    }

    let answer;
    let validAnswers = ['y', 'Y', 'n', 'N'];
    prompt(`Play again(Y or N)`);
    answer = readline.question().trim().toLowerCase();

    while (validAnswers.indexOf(answer) === -1) {
      prompt('Invalid entry, please answer "Y" or "N"');
      answer = readline.question().trim().toLowerCase();
    }

    if (answer === 'n') break;

    getFirstPlayer();
  }

  prompt('Thanks for playing Tic Tac Toe!');
  break;
}





