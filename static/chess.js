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

const populateBoard = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                let cell = document.getElementById("c" + i + j);
                 cell.innerHTML = board[i][j];
        }
    }
}

populateBoard()

const whitePieces = [
    '♔', '♕', '♗', '♘', '♖', '♙'
]

const blackPieces = [
    '♚', '♛', '♝', '♞', '♜', '♟'
]

let firstMove = true
let turn = 'white'

let whiteKings = 0
let blackKings = 0
let winner = ''

const turnChange = () => {
    if (turn === 'white') {
        turn = 'black'
    } else if (turn === 'black') {
        turn = 'white'
        firstMove = false
    }
    console.log(turn)
    console.table(board)
    populateBoard()
    hasKingW()
    hasKingB()
    checkWinner()
}

document.getElementById('show-turn').innerHTML = turn

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
        
        // checks for other pieces of the same color
        
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row][column - j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row][column - j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                } 
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row][column - j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row].splice(column - move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        

    } else if (direction === 'down') {

        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row + j][column] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row + j][column] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                } 
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row + j][column].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row + move].splice(column, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        
    
    } else if (direction === 'up') {

        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row - j][column] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row - j][column] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                } 
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row - j][column].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row - move].splice(column, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        
    
    } else if (direction === 'right') {

       for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row][column + j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row][column + j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                } 
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row][column + j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row].splice(move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
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

        for (i = 0; i < 5; i++) {   
            if (turn === 'white' && board[row - 1][column - 2] === whitePieces[i]) {
                console.log("invalid move")
                return
            } else if (turn === 'black' && board[row - 1][column - 2] === blackPieces[i]) {
                console.log("invalid move")
                return
            } 
        } 
        board[row - 1].splice(column - 2, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        

    } else if (x === 'left' && y === 'down') {

        for (i = 0; i < 5; i++) {   
            if (turn === 'white' && board[row + 1][column - 2] === whitePieces[i]) {
                console.log("invalid move")
                return
            } else if (turn === 'black' && board[row + 1][column - 2] === blackPieces[i]) {
                console.log("invalid move")
                return
            } 
        } 
        board[row + 1].splice(column - 2, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        

    } else if (x === 'up' && y === 'left') {

        for (i = 0; i < 5; i++) {   
            if (turn === 'white' && board[row - 2][column - 1] === whitePieces[i]) {
                console.log("invalid move")
                return
            } else if (turn === 'black' && board[row - 2][column - 1] === blackPieces[i]) {
                console.log("invalid move")
                return
            } 
        } 
        board[row - 2].splice(column - 1, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()


    } else if (x === 'up' && y === 'right') {

        for (i = 0; i < 5; i++) {   
            if (turn === 'white' && board[row - 2][column + 1] === whitePieces[i]) {
                console.log("invalid move")
                return
            } else if (turn === 'black' && board[row - 2][column + 1] === blackPieces[i]) {
                console.log("invalid move")
                return
            } 
        } 
        board[row - 2].splice(column + 1, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()


    } else if (x === 'right' && y === 'up') {

        for (i = 0; i < 5; i++) {   
            if (turn === 'white' && board[row - 1][column + 2] === whitePieces[i]) {
                console.log("invalid move")
                return
            } else if (turn === 'black' && board[row - 1][column + 2] === blackPieces[i]) {
                console.log("invalid move")
                return
            } 
        } 
        board[row - 1].splice(column + 2, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        

    } else if (x === 'right' && y ==='down') {

        for (i = 0; i < 5; i++) {   
            if (turn === 'white' && board[row + 1][column + 2] === whitePieces[i]) {
                console.log("invalid move")
                return
            } else if (turn === 'black' && board[row + 1][column + 2] === blackPieces[i]) {
                console.log("invalid move")
                return
            } 
        } 
        board[row + 1].splice(column + 2, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        

    } else if (x === 'down' && y === 'left') {

       for (i = 0; i < 5; i++) {   
            if (turn === 'white' && board[row + 2][column - 1] === whitePieces[i]) {
                console.log("invalid move")
                return
            } else if (turn === 'black' && board[row + 2][column - 1] === blackPieces[i]) {
                console.log("invalid move")
                return
            } 
        } 
        board[row + 2].splice(column - 1, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        
        
    } else if (x === 'down' && y ==='right') {

        for (i = 0; i < 5; i++) {   
            if (turn === 'white' && board[row + 2][column + 1] === whitePieces[i]) {
                console.log("invalid move")
                return
            } else if (turn === 'black' && board[row + 2][column + 1] === blackPieces[i]) {
                console.log("invalid move")
                return
            } 
        } 
        board[row + 2].splice(column + 1, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
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

        // checks for same color pieces in each spot
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row - j][column - j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row - j][column - j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                } 
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row - j][column - j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row - move].splice(column - move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        

    } else if (direction === 'leftb') {

        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row + j][column - j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row + j][column - j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                } 
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row + j][column - j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row + move].splice(column - move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()


    } else if (direction === 'rightt') {

        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row - j][column + j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row - j][column + j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                } 
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row - j][column + j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row - move].splice(column + move, 1, board[row][column])
        board[row].splice(column, 1 , '')
        turnChange()

    } else if (direction === 'rightb') {

        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row + j][column + j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row + j][column + j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                } 
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row + j][column + j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row + move].splice(column + move, 1, board[row][column])
        board[row].splice(column, 1 , '')
        turnChange()
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
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row][column - j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row][column - j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row][column - j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row].splice(column - move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()


    } else if (direction === 'down') {
        
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row][column + j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row][column + j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row][column + j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row].splice(column + move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()


    } else if (direction === 'right') {

        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row + j][column] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row + j][column] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row + j][column].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row + move].splice(column, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
    

    } else if (direction === 'left') {

        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row - j][column] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row - j][column] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row - j][column].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row - move].splice(column, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        

    }  else if (direction === 'topl') {
       
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row - j][column - j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row - j][column - j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row - j][column - j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row - move].splice(column - move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        

    } else if (direction === 'topr') {
        
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row - j][column + j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row - j][column + j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row - j][column + j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row - move].splice(column + move, 1, board[row][column])
        board[row].splice(column, 1 , '')
        turnChange()
        

    } else if (direction === 'downl') {

       for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row + j][column - j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row + j][column - j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row + j][column - j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row + move].splice(column - move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()
        

    } else if (direction === 'downr') {

       for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row + j][column + j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row + j][column + j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 

        for (j = move - 1; j > 0; j--) {
            if (board[row + j][column + j].length === 1) {
                console.log("invalid move")
                return
            }
        }
        board[row + move].splice(column + move, 1, board[row][column])
        board[row].splice(column, 1 , '')
        turnChange()
        
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
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row][column - j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row][column - j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 
        board[row].splice(column - move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()

    } else if (direction === 'down') {
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row][column + j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row][column + j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 
        board[row].splice(column + move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()

    } else if (direction === 'right') {
        
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row + j][column] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row + j][column] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 
        board[row + move].splice(column, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()

    } else if (direction === 'left') {
       
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row - j][column] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row - j][column] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 
        board[row - move].splice(column, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()

    }  else if (direction === 'topl') {
       
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row - j][column - j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row - j][column - j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 
        board[row - move].splice(column - move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()

    } else if (direction === 'topr') {
        
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row - j][column + j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row - j][column + j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 
        board[row - move].splice(column + move, 1, board[row][column])
        board[row].splice(column, 1 , '')
        turnChange()

    } else if (direction === 'downl') {
        
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row + j][column - j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row + j][column - j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 
        board[row + move].splice(column - move, 1, board[row][column])
        board[row].splice(column, 1, '')
        turnChange()

    } else if (direction === 'downr') {
        
        for (i = 0; i < 5; i++) { 
            for (j = move; j > 0; j--) {
                if (turn === 'white' && board[row + j][column + j] === whitePieces[i]) {
                    console.log("invalid move")
                    return
                } else if (turn === 'black' && board[row + j][column + j] === blackPieces[i]) {
                    console.log("invalid move")
                    return
                }
            }
        } 
        board[row + move].splice(column + move, 1, board[row][column])
        board[row].splice(column, 1 , '')
        turnChange()
    }

}

const hasKingW = () => {
    for (i = 0; i <= 7; i++) {
        for (j = 0; j <= 7; j++) {
            if (board[i][j] === whitePieces[0]) {
                whiteKings = 1
                console.log(whiteKings)
            }
        }
    }
    
    if (whiteKings === 0) {
        winner = 'black'
    }
}

const hasKingB = () => {
    for (i = 0; i <= 7; i++) {
        for (j = 0; j <= 7; j++) {
            if (board[i][j] === blackPieces[0]) {
                blackKings = 1
                console.log(blackKings)
            } 
        }
    }
    if (blackKings === 0) {
        winner = 'white'
    }
}

const checkWinner = () => {
    if (winner === 'white') {
        document.getElementById('show-winner').innerHTML = "white wins!"
    } else if (winner === 'black') {
        document.getElementById('show-winner').innerHTML = "black wins!"
    } else if (winner === '') {
        return
    }
}