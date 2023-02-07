let board = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
]

const whitePieces = [
    '♔', '♕', '♗', '♘', '♖', '♙'
]

const blackPieces = [
    '♚', '♛', '♝', '♞', '♜', '♟'
]

let firstMove = true
let turn = 'white'

const turnChange = () => {
    if (turn === 'white') {
        turn = 'black'
    } else if (turn === 'black') {
        turn = 'white'
        firstMove = false
    }
    console.log(turn)
}

console.table(board)

const pawnMove = (row, column, move = 1) => {
    if (move > 2) {
        console.log("invalid move")
    } else if (firstMove === false && move > 1) {
        console.log("invalid move")

        
    } else if (turn === 'white') {
        if (board[row][column] !== whitePieces[5]) {
            console.log("invalid piece")
        } 
        else if (board[row - move][column].length === 0) { 
            board[row - move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            console.table(board)
            turnChange()
        }
        
    } else if (turn === 'black') {
        if (board[row][column] !== blackPieces[5]) {
            console.log("invalid piece")
        }
        else if (board[row + move][column].length === 0) { 
            board[row + move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            console.table(board)
            turnChange()
        } 
    } 
}

const rookMove = (row, column, direction, move) => {
    if (turn === 'white' && board[row][column] !== whitePieces[4]) {
        console.log("invalid piece")
    } else if (turn === 'black' && board[row][column] !== blackPieces[4]) {
        console.log("invalid piece")
   

    } if (direction === 'left') {
        if (board[row][column - 1].length === 1) {
            console.log("invalid move")
        } else {
            board[column - move].splice(row, 1, board[row][column])
            board[column].splice(row, 1, '')
            console.table(board)
            turnChange()
        }

    } else if (direction === 'down') {
        if (board[row + 1][column].length === 1) {
            console.log("invalid move")
        } else {
            board[row + move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            console.table(board)
            turnChange()
        }
    
    } else if (direction = 'up') {
        if (board[row - 1][column].length === 1) {
            console.log("invalid move")
        } else {
            board[row - move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            console.table(board)
            turnChange()
        }
    
    } else if (direction === 'right') {
        if (board[row][column + 1].length === 1) {
            console.log("invalid move")
        } else {
            board[column + move].splice(row, 1, board[row][column])
            board[column].splice(row, 1, '')
            console.table(board)
            turnChange()
        }
    }
}

const knightMove = () => {
    
}