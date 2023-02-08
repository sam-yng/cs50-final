const board = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
]

let firstMove = true
let turn = 'white'

const changeTurn = () => {
    if (turn == 'white') {
        turn == 'black'
    } else if (turn == 'black') {
        turn == 'white'
        firstMove == false
    }  
}

const whitePieces = [
    '♔', '♕', '♗', '♘', '♖', '♙'
]

const blackPieces = [
    '♚', '♛', '♝', '♞', '♜', '♟'
]

let squares = []

for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
            squares.push(board[i][j])
    }
}

let tableCells = document.querySelectorAll('td')

const populateBoard = () => {
    for (i = 0; i <= 63; i++) {
        tableCells[i].innerHTML = squares[i]
        
        if (tableCells[i].innerHTML) {
            tableCells[i].classList.add('occupied')
        }
    }
}

populateBoard()

let selectedPiece = document.getElementsByClassName('toggled')

const allowToggle = () => {
    tableCells.forEach(cell => {
        if (cell.innerHTML) {
            cell.addEventListener('click', function() {
                limitToggle()
                cell.classList.add('toggled')
                let id = (selectedPiece[0].id)
                getMoves(id)
            })
        }
    })
}

const limitToggle = () => {
    document.querySelectorAll('.toggled').forEach(item => {
        item.classList.remove('toggled');
        allowToggle()
    })
}

allowToggle()

const getMoves = (id) => {

    if (document.getElementById(id).innerHTML === whitePieces[5]) {
        const moves = []

        if (firstMove === true) {
            let newId = parseInt(id) + 10
            moves.push(newId.toString())
            let newId2 = parseInt(id) + 20
            moves.push(newId2.toString())

        } else {
            let newId = parseInt(id) + 10
            moves.push(newId.toString())
        }

        removeMove()
        moves.forEach(move => {
            if (document.getElementById(move).innerHTML) {
                moves.pop()
                return
            }
            document.getElementById(move).classList.add('move')
        })
        move()
        changeTurn()



    } else if (document.getElementById(id).innerHTML === blackPieces[5]) {
        const moves = []

        if (firstMove === true) {
            let newId = parseInt(id) - 10
            let newId2 = parseInt(id) - 20
            moves.push(newId.toString(), newId2.toString())

        } else {
            let newId = parseInt(id) - 10
            moves.push(newId.toString())
        }

        console.log(moves)

        removeMove()
        moves.forEach(move => {
            if (document.getElementById(move).innerHTML) {
                moves.pop()
                return
            }
            document.getElementById(move).classList.add('move')
        })
        move()
        changeTurn()


    } else if (document.getElementById(id).innerHTML === blackPieces[4] || document.getElementById(id).innerHTML === whitePieces[4]) {
        const moves = []
        

        moves.push((parseInt(id) - 10).toString())
        moves.push((parseInt(id) - 20).toString())
        moves.push((parseInt(id) - 30).toString())
        moves.push((parseInt(id) - 40).toString())
        moves.push((parseInt(id) - 50).toString())
        moves.push((parseInt(id) - 60).toString())
        moves.push((parseInt(id) - 70).toString())

        moves.push((parseInt(id) + 10).toString())
        moves.push((parseInt(id) + 20).toString())
        moves.push((parseInt(id) + 30).toString())
        moves.push((parseInt(id) + 40).toString())
        moves.push((parseInt(id) + 50).toString())
        moves.push((parseInt(id) + 60).toString())
        moves.push((parseInt(id) + 70).toString())

        moves.push((parseInt(id) - 1).toString())
        moves.push((parseInt(id) - 2).toString())
        moves.push((parseInt(id) - 3).toString())
        moves.push((parseInt(id) - 4).toString())
        moves.push((parseInt(id) - 5).toString())
        moves.push((parseInt(id) - 6).toString())
        moves.push((parseInt(id) - 7).toString())

        moves.push((parseInt(id) + 1).toString())
        moves.push((parseInt(id) + 2).toString())
        moves.push((parseInt(id) + 3).toString())
        moves.push((parseInt(id) + 4).toString())
        moves.push((parseInt(id) + 5).toString())
        moves.push((parseInt(id) + 6).toString())
        moves.push((parseInt(id) + 7).toString())

        function clean(move) {
            return move >= 11 && move <= 88
        }

        cleanMoves = moves.filter(clean)
        console.log(cleanMoves)

        removeMove()
        cleanMoves.forEach(move => {
            
            if (document.getElementById(move).innerHTML) {
                cleanMoves.pop()
                //console.log(move)
                return
            }
            
            document.getElementById(move).classList.add('move')
            
        })
    }

}

const removeMove = () => {
    document.querySelectorAll('.move').forEach(item => {
        item.classList.remove('move')
    })
}

const move = () => {
    document.querySelectorAll('.move').forEach(item => {
        item.addEventListener('click', event => {
            console.log('hello')
            let oldSpace = document.querySelector('.toggled')
            let newSpace = event.target

            newSpace.innerHTML = oldSpace.innerHTML
            oldSpace.innerHTML = ''
            removeMove()
            limitToggle()
        })
    })
}
