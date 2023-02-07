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
    console.table(board)
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
            turnChange()
        }
        
    } else if (turn === 'black') {
        if (board[row][column] !== blackPieces[5]) {
            console.log("invalid piece")
        }
        else if (board[row + move][column].length === 0) { 
            board[row + move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        } 
    } 
}

const rookMove = (row, column, direction, move) => {
    // direction = left, right, up, down
    // move = 1, 2, 3... 7

    if (turn === 'white' && board[row][column] !== whitePieces[4]) {
        console.log("invalid piece")
    } else if (turn === 'black' && board[row][column] !== blackPieces[4]) {
        console.log("invalid piece")
   

    } else if (direction === 'left') {
        if (board[row][column - 1].length === 1) {
            console.log("invalid move")
        } else {
            board[row].splice(column - move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'down') {
        if (board[row + 1][column].length === 1) {
            console.log("invalid move")
        } else {
            board[row + move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }
    
    } else if (direction === 'up') {
        if (board[row - 1][column].length === 1) {
            console.log("invalid move")
        } else {
            board[row - move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }
    
    } else if (direction === 'right') {
        if (board[row][column + 1].length === 1) {
            console.log("invalid move")
        } else {
            board[row].splice(move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }
    }
}

const knightMove = (row, column, x, y) => {
    // x = left, right, up, down
    // y = left, right, up, down

    //  ---------------------
    // |   ex    (up)   xy   |
    // | xe               xy |
    // |                     |
    // |(left)    ♞   (right)|
    // |                     |
    // | xy               xy |
    // |   xy   (down)  xy   |
    //  ---------------------

    // ex = (row, column, up, left)
    // xe = (row, column, left, up)

    if (turn === 'white' && board[row][column] !== whitePieces[3]) {
        console.log("invalid piece")
    } else if (turn === 'black' && board[row][column] !== blackPieces[3]) {
        console.log("invalid piece")
   

    } else if (x === 'left' && y === 'up') {
        if (board[row - 1][column - 2].length === 1) {
            console.log("invalid move")
        } else {
            board[row - 1].splice(column - 2, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (x === 'left' && y === 'down') {
        if (board[row + 1][column - 2].length === 1) {
            console.log("invalid move")
        } else {
            board[row + 1].splice(column - 2, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (x === 'up' && y === 'left') {
        if (board[row - 2][column - 1].length === 1) {
            console.log("invalid move")
        } else {
            board[row - 2].splice(column - 1, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (x === 'up' && y === 'right') {
        if (board[row - 2][column + 1].length === 1) {
            console.log("invalid move")
        } else {
            board[row - 2].splice(column + 1, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (x === 'right' && y === 'up') {
        if (board[row - 1][column - 2].length === 1) {
            console.log("invalid move")
        } else {
            board[row - 1].splice(column + 2, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (x === 'right' && y ==='down') {
        if (board[row + 1][column + 2].length === 1) {
            console.log("invalid move")
        } else {
            board[row + 1].splice(column + 2, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (x === 'down' && y === 'left') {
        if (board[row + 2][column - 1].length === 1) {
            console.log("invalid move")
        } else {
            board[row + 2].splice(column - 1, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }
        
    } else if (x === 'down' && y ==='right') {
        if (board[row + 2][column + 1].length === 1) {
            console.log("invalid move")
        } else {
            board[row + 2].splice(column + 1, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }
    }
}

const bishopMove = (row, column, direction, move) => {
    // direction = leftt, leftb, rightt, rightb
    // move = 1, 2, 3... 7

    //  ---------------------
    // | (leftt)    (rightt) |
    // |                     |
    // |                     |
    // |          ♝          |
    // |                     |
    // |                     |
    // | (letfb)    (rightb) |
    //  ---------------------

    if (turn === 'white' && board[row][column] !== whitePieces[2]) {
        console.log("invalid piece")
    } else if (turn === 'black' && board[row][column] !== blackPieces[2]) {
        console.log("invalid piece")
    }

    else if (direction === 'leftt') {
        if (board[row - move][column - move].length === 1) {
            console.log("invalid move")
        } else {
            board[row - move].splice(column - move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'leftb') {
        if (board[row + move][column - move].length === 1) {
            console.log("invalid move") 
        } else {
            board[row + move].splice(column - move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'rightt') {
        if (board[row - move][column + move].length === 1) {
            console.log("invalid move")
        } else {
            board[row - move].splice(column + move, 1, board[row][column])
            board[row].splice(column, 1 , '')
            turnChange()
        }

    } else if (direction === 'rightb') {
        if (board[row + move][column + move].length === 1) {
            console.log("invalid piece")
        } else {
            board[row + move].splice(column + move, 1, board[row][column])
            board[row].splice(column, 1 , '')
            turnChange()
        }
    }
}

const queenMove = (row, column, direction, move) => {
    // direction = top, down, left, right, topl, topr, downl, downr

    //  ---------------------
    // |        (top)        |
    // |(topl)         (topr)|
    // |                     |
    // |(left)    ♛   (right)|
    // |                     |
    // |(donwl)       (downr)|
    // |        (down)       |
    //  ---------------------

    if (turn === 'white' && board[row][column] !== whitePieces[1]) {
        console.log("invalid piece")
    } else if (turn === 'black' && board[row][column] !== blackPieces[1]) {
        console.log("invalid piece")
    }

    else if (direction === 'top') {
        if (board[row][column - move].length === 1) {
            console.log("invalid move")
        } else {
            board[row].splice(column - move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'down') {
        if (board[row][column + move].length === 1) {
            console.log("invalid move")
        } else {
            board[row].splice(column + move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'right') {
        if (board[row + move][column].length === 1) {
            console.log("invalid move")
        } else {
            board[row + move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'left') {
        if (board[row - move][column].length === 1) {
            console.log("invalid move")
        } else {
            board[row - move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    }  else if (direction === 'topl') {
        if (board[row - move][column - move].length === 1) {
            console.log("invalid move")
        } else {
            board[row - move].splice(column - move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'topr') {
        if (board[row - move][column + move].length === 1) {
            console.log("invalid move")
        } else {
            board[row - move].splice(column + move, 1, board[row][column])
            board[row].splice(column, 1 , '')
            turnChange()
        }

    } else if (direction === 'downl') {
        if (board[row + move][column - move].length === 1) {
            console.log("invalid move") 
        } else {
            board[row + move].splice(column - move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'downr') {
        if (board[row + move][column + move].length === 1) {
            console.log("invalid piece")
        } else {
            board[row + move].splice(column + move, 1, board[row][column])
            board[row].splice(column, 1 , '')
            turnChange()
        }
    }
}

const kingMove = (row, column, direction, move = 1) => {
    // direction = top, down, left, right, topl, topr, downl, downr

    //  ---------------------
    // |        (top)        |
    // |(topl)         (topr)|
    // |                     |
    // |(left)    ♚   (right)|
    // |                     |
    // |(donwl)       (downr)|
    // |        (down)       |
    //  ---------------------

    if (turn === 'white' && board[row][column] !== whitePieces[0]) {
        console.log("invalid piece")
    } else if (turn === 'black' && board[row][column] !== blackPieces[0]) {
        console.log("invalid piece")
    } else if (move > 1) {
        console.log("invalid move")
    }

    else if (direction === 'top') {
        if (board[row][column - move].length === 1) {
            console.log("invalid move")
        } else {
            board[row].splice(column - move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'down') {
        if (board[row][column + move].length === 1) {
            console.log("invalid move")
        } else {
            board[row].splice(column + move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'right') {
        if (board[row + move][column].length === 1) {
            console.log("invalid move")
        } else {
            board[row + move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'left') {
        if (board[row - move][column].length === 1) {
            console.log("invalid move")
        } else {
            board[row - move].splice(column, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    }  else if (direction === 'topl') {
        if (board[row - move][column - move].length === 1) {
            console.log("invalid move")
        } else {
            board[row - move].splice(column - move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'topr') {
        if (board[row - move][column + move].length === 1) {
            console.log("invalid move")
        } else {
            board[row - move].splice(column + move, 1, board[row][column])
            board[row].splice(column, 1 , '')
            turnChange()
        }

    } else if (direction === 'downl') {
        if (board[row + move][column - move].length === 1) {
            console.log("invalid move") 
        } else {
            board[row + move].splice(column - move, 1, board[row][column])
            board[row].splice(column, 1, '')
            turnChange()
        }

    } else if (direction === 'downr') {
        if (board[row + move][column + move].length === 1) {
            console.log("invalid piece")
        } else {
            board[row + move].splice(column + move, 1, board[row][column])
            board[row].splice(column, 1 , '')
            turnChange()
        }
    }

}