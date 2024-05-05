let currentPlayer = 'X';
let gameOver = false;

function makeMove(row, col) {
    if (!gameOver && document.getElementById(`cell-${row}-${col}`).innerHTML === '') {
        document.getElementById(`cell-${row}-${col}`).innerHTML = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    const board = [
        [getCell(0, 0), getCell(0, 1), getCell(0, 2)],
        [getCell(1, 0), getCell(1, 1), getCell(1, 2)],
        [getCell(2, 0), getCell(2, 1), getCell(2, 2)]
    ];
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            endGame(board[i][0]);
            return;
        }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            endGame(board[0][j]);
            return;
        }
    }
    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        endGame(board[0][0]);
        return;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        endGame(board[0][2]);
        return;
    }
    // Check for draw
    let draw = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                draw = false;
                break;
            }
        }
    }
    if (draw) {
        endGame('D');
    }
}

function endGame(winner) {
    gameOver = true;
    let message = '';
    if (winner === 'D') {
        message = 'It\'s a draw!';
    } else {
        message = `Player ${winner} wins!`;
    }
    document.getElementById('message').innerHTML = message;
}

function getCell(row, col) {
    return document.getElementById(`cell-${row}-${col}`).innerHTML;
}

