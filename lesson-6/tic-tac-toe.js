const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const readline = require('readline-sync');

let initBoard = () => {
	let board = {};

	for (let square = 1; square <= 9; square++) {
		board[String(square)] = INITIAL_MARKER;
	}

	return board;
};

let emptySquares = (board) => {
	return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
};

let displayBoard = (board) => {
	console.clear();

	console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

	console.log('');
	console.log('     |     |');
	console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
	console.log('     |     |');
	console.log('-----+-----+-----');
	console.log('     |     |');
	console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
	console.log('     |     |');
	console.log('-----+-----+-----');
	console.log('     |     |');
	console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
	console.log('     |     |');
	console.log('');
};

let joinOr = (board, delimiter, conjunction) => {
	// get the empty squares arr
	let emptySquaresArr;
	console.log('wut');

	// remove and save the last element
	// put the delimiter between the elements if it's more then one element long
	// add the conjunction if it's more than two items long
	// return the String
};
let squaresString = (board, delimiter, symbol) => {
	let squaresArr = emptySquares(board);
	console.log(squaresArr);

	let squareString = '';
	if (squaresArr.length === 1) {
		squareString += squaresArr[0];
	} else if (squaresArr.length === 2) {
		squareString = squaresArr.join(` ${delimiter} `);
	} else {
		let lastChar = squaresArr[squaresArr.length - 1];
		squareString = squaresArr.slice(0, squaresArr.length - 1).join(`${symbol} `) + ' ' + delimiter + ' ' + lastChar;
	}

	return squareString;
};

let playerChoosesSquare = (board) => {
	let square;

	while (true) {
		console.log(`Choose a square (${squaresString(board, 'or', ',')}:)`);
		square = readline.question().trim();

		if (emptySquares(board).includes(square)) break;

		console.log("Sorry, that's not a valid choice.");
	}

	board[square] = HUMAN_MARKER;
};

let computerChoosesSquare = (board) => {
	let randomIndex = Math.floor(Math.random() * emptySquares.length);

	let square = emptySquares(board)[randomIndex];
	board[square] = COMPUTER_MARKER;
};

let boardFull = (board) => {
	return emptySquares(board).length === 0;
};

let someoneWon = (board) => {
	return !!detectWinner(board);
};

let detectWinner = (board) => {
	let winningLines = [
		[
			1,
			2,
			3
		],
		[
			4,
			5,
			6
		],
		[
			7,
			8,
			9
		],
		[
			1,
			4,
			7
		],
		[
			2,
			5,
			8
		],
		[
			3,
			6,
			9
		],
		[
			1,
			5,
			9
		],
		[
			3,
			5,
			7
		]
	];

	for (let line = 0; line < winningLines.length; line++) {
		let [
			sq1,
			sq2,
			sq3
		] = winningLines[line];

		if (board[sq1] == HUMAN_MARKER && board[sq2] == HUMAN_MARKER && board[sq3] == HUMAN_MARKER) {
			return 'Player';
		} else if (board[sq1] === COMPUTER_MARKER && board[sq2] === COMPUTER_MARKER && board[sq3] === COMPUTER_MARKER) {
			return 'Computer';
		}
	}

	return null;
};

function doSomething() {
	console.log('WTFWTFWTFWTF');
}

while (true) {
	let board = initBoard();

	while (true) {
		displayBoard(board);

		playerChoosesSquare(board);
		if (someoneWon(board) || boardFull(board)) break;

		computerChoosesSquare(board);
		if (someoneWon(board) || boardFull(board)) break;
	}

	displayBoard(board);

	if (someoneWon(board)) {
		console.log(`${detectWinner(board)} won!`);
	} else {
		console.log("It's a tie!");
	}

	console.log('Play again? (y or n)');
	let answer = readline.question().toLowerCase()[0];
	if (answer !== 'y') break;
}

console.log('Thanks for playing Tic Tac Toe!');
