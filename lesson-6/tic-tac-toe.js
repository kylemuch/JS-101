const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;

const readline = require('readline-sync');

let initBoard = () => {
	let board = {
		p1Score : 0,
		p2Score : 0,
		squares : {}
	};

	for (let square = 1; square <= 9; square++) {
		board.squares[String(square)] = INITIAL_MARKER;
	}

	return board;
};

// let board = initBoard();

let emptySquares = (board) => {
	return Object.keys(board.squares).filter((key) => board.squares[key] === INITIAL_MARKER);
};

let displayBoard = (board) => {
	console.clear();

	console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

	console.log('');
	console.log('     |     |');
	console.log(`  ${board.squares[1]}  |  ${board.squares[2]}  |  ${board.squares[3]}`);
	console.log('     |     |');
	console.log('-----+-----+-----');
	console.log('     |     |');
	console.log(`  ${board.squares[4]}  |  ${board.squares[5]}  |  ${board.squares[6]}`);
	console.log('     |     |');
	console.log('-----+-----+-----');
	console.log('     |     |');
	console.log(`  ${board.squares[7]}  |  ${board.squares[8]}  |  ${board.squares[9]}`);
	console.log('     |     |');
	console.log('');
};

function joinOr(arr, delimiter = ', ', word = 'or') {
	switch (arr.length) {
		case 0:
			return '';
		case 1:
			return `${arr[0]}`;
		case 2:
			return arr.join(` ${word} `);
		default:
			return arr.slice(0, arr.length - 1).join(delimiter) + `${delimiter}${word} ${arr[arr.length - 1]}`;
	}
}

let playerChoosesSquare = (board) => {
	let square;

	while (true) {
		console.log(`Choose a square (${joinOr(emptySquares(board))}:)`);
		square = readline.question().trim();

		if (emptySquares(board).includes(square)) break;

		console.log("Sorry, that's not a valid choice.");
	}

	board.squares[square] = HUMAN_MARKER;
};

// write a function that checks all of the rows/columns and checks if there are 2 player symbols in the row/column. If there are, take the third

let fakeBoard = {
	squares : {
		1 : 'X',
		2 : 'O',
		3 : 'X',
		4 : 'O',
		5 : 'X',
		6 : ' ',
		7 : 'X',
		8 : 'O',
		9 : 'X'
	}
};

let threatDetector = (board) => {
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

	// turn the winningLines arr into an array of the actual moves
	let movesArr = [];
	let outerIndex;
	let innerIndex;

	for (let i = 0; i < winningLines.length; i++) {
		let tempArr = [];

		for (var j = 0; j < winningLines[i].length; j++) {
			tempArr.push(board.squares[winningLines[i][j]]);
		}

		movesArr.push(tempArr);
	}

	for (let i = 0; i < movesArr.length; i++) {
		let currArr = movesArr[i];

		let twoMoves = currArr.filter((el) => el === HUMAN_MARKER).length === 2;
		let openIndex = currArr.indexOf(' ');

		if (twoMoves && openIndex > -1) {
			outerIndex = i;
			innerIndex = openIndex;
		}
	}

	if (winningLines[outerIndex]) {
		return winningLines[outerIndex][innerIndex];
	} else {
		return null;
	}
};

let computerChoosesSquare = (board) => {
	if (threatDetector(board)) {
		board.squares[threatDetector(board)] = COMPUTER_MARKER;
	} else {
		let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

		let square = emptySquares(board)[randomIndex];
		board.squares[square] = COMPUTER_MARKER;
	}
};

let boardFull = (board) => {
	return emptySquares(board).length === 0;
};

let seriesOver = (board) => {
	if (board.p1Score === GAMES_TO_WIN) {
		return `Player wins the ${GAMES_TO_WIN} game series!!!`;
	} else if (board.p2Score === GAMES_TO_WIN) {
		return `Computer wins the ${GAMES_TO_WIN} game series!!! BOOOOOOO!!!!!!`;
	} else {
		return null;
	}
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

		if (
			board.squares[sq1] === HUMAN_MARKER &&
			board.squares[sq2] === HUMAN_MARKER &&
			board.squares[sq3] === HUMAN_MARKER
		) {
			return 'Player';
		} else if (
			board.squares[sq1] === COMPUTER_MARKER &&
			board.squares[sq2] === COMPUTER_MARKER &&
			board.squares[sq3] === COMPUTER_MARKER
		) {
			return 'Computer';
		}
	}

	return null;
};

let clearBoard = () => {
	for (let square = 1; square <= 9; square++) {
		board.squares[String(square)] = INITIAL_MARKER;
	}
};

let displayScore = (board) => {
	console.log(`The score is currently Player: ${board.p1Score} to Computer: ${board.p2Score}`);
};

let board = initBoard();

while (true) {
	while (true) {
		displayBoard(board);

		playerChoosesSquare(board);
		if (someoneWon(board) || boardFull(board)) break;

		computerChoosesSquare(board);
		if (someoneWon(board) || boardFull(board)) break;
	}

	displayBoard(board);

	if (someoneWon(board)) {
		let winner = detectWinner(board);

		winner === 'Player' ? (board.p1Score += 1) : (board.p2Score += 1);

		console.log(`${detectWinner(board)} won!`);
		displayScore(board);
		if (seriesOver(board)) {
			console.log(seriesOver(board));
			break;
		}
	} else {
		console.log("It's a tie!");
		displayScore(board);
	}

	console.log('Play again? (y or n)');

	let answer = readline.question().toLowerCase()[0];
	if (answer !== 'y') {
		break;
	} else {
		clearBoard();
	}
}

console.log('Thanks for playing Tic Tac Toe!');
