class Game {
    constructor(board) {
        this.board = board
        this.pieces = pieces
        this.turn = 'white'
        this.whitePieces = ['♔', '♕', '♗', '♘', '♖', '♙']
        this.blackPieces = ['♚', '♛', '♝', '♞', '♜', '♟']
        this.chessBoard = [
            '81', '82', '83', '84', '85', '86', '87', '88', 
            '71', '72', '73', '74', '75', '76', '77', '78',
            '61', '62', '63', '64', '65', '66', '67', '68',
            '51', '52', '53', '54', '55', '56', '57', '58',
            '41', '42', '43', '44', '45', '46', '47', '48',
            '31', '32', '33', '34', '35', '36', '37', '38',
            '21', '22', '23', '24', '25', '26', '27', '28',
            '11', '12', '13', '14', '15', '16', '17', '18'
        ]
    }

    changeTurn() {
        if (this.turn == 'white') {
            turn == 'black'
        } else if (this.turn == 'black') {
            turn == 'white'
        }  
    }

    placePieces() {
        for (i = 0; i < 32; i++) {
            pieces[i].populateBoard(pieces[i])
        }
    }

    identifyPieces() {
        let squares = [];

        for (i = 0; i <= 63; i++) {
            squares.push(document.getElementById(chessBoard[i]));
        }

        for (i = 0; i <= 63; i++) {
            if (squares[i].innerHTML) {
                squares[i].classList.add('occupied');
            } else {
                squares[i].classList.remove('occupied')
                squares[i].classList.remove('whitePiece')
                squares[i].classList.remove('blackPiece')
            }
        }
    }

    whiteCheck() {
        document.querySelectorAll('.occupied').forEach(item => {
            for (i = 0; i < 6; i++) {
                if (item.innerHTML == whitePieces[i]) {
                    item.classList.add('whitePiece')
                    item.classList.remove('occupied')
                } 
            }
        })
    }

    blackCheck() {
        document.querySelectorAll('.occupied').forEach(item => {
            for (i = 0; i < 6; i++) {
                if (item.innerHTML == blackPieces[i]) {
                    item.classList.add('blackPiece')
                    item.classList.remove('occupied')
                } 
            }
        })
    }

    toggle() {
        if (turn == 'white') {
            document.querySelectorAll('.whitePiece').forEach(item => {
                item.addEventListener('click', event => {
                    this.unToggle()
                    this.removeMove()
                    item.classList.add('toggled')
                    item.removeEventListener('click', event)
                })
            })
        } else if (turn == 'black') {
            document.querySelectorAll('.blackPiece').forEach(item => {
                item.addEventListener('click', event => {
                    this.unToggle()
                    this.removeMove()
                    item.classList.add('toggled')
                    item.removeEventListener('click', event)
                })
            })
        }
    }

    unToggle() {
        document.querySelectorAll('.toggled').forEach(item => {
            item.classList.remove('toggled');
        })
    }

    removeMove() {
        document.querySelectorAll('.move').forEach(item => {
            item.classList.remove('move');
        })
    }
}


const pieces = [
    new whitePawn('whitePawn1', chessBoard[48]),
    new whitePawn('whitePawn2', chessBoard[49]),
    new whitePawn('whitePawn3', chessBoard[50]),
    new whitePawn('whitePawn4', chessBoard[51]),
    new whitePawn('whitePawn5', chessBoard[52]),
    new whitePawn('whitePawn6', chessBoard[53]),
    new whitePawn('whitePawn7', chessBoard[54]),
    new whitePawn('whitePawn8', chessBoard[55]),
    new blackPawn('blackPawn1', chessBoard[8]),
    new blackPawn('blackPawn2', chessBoard[9]),
    new blackPawn('blackPawn3', chessBoard[10]),
    new blackPawn('blackPawn4', chessBoard[11]),
    new blackPawn('blackPawn5', chessBoard[12]),
    new blackPawn('blackPawn6', chessBoard[13]),
    new blackPawn('blackPawn7', chessBoard[14]),
    new blackPawn('blackPawn8', chessBoard[15]),

    new whiteRook('whiteRook1', chessBoard[56]),
    new whiteRook('whiteRook2', chessBoard[63]),
    new blackRook('blackRook1', chessBoard[0]),
    new blackRook('blackRook1', chessBoard[7]),

    new whiteBishop('whiteBishop1', chessBoard[58]),
    new whiteBishop('whiteBishop2', chessBoard[61]),
    new blackBishop('blackBishop1', chessBoard[2]),
    new blackBishop('blackBishop2', chessBoard[5]),

    new whiteKnight('whiteKnight1', chessBoard[57]),
    new whiteKnight('whiteKnight2', chessBoard[62]),
    new blackKnight('blackKnight1', chessBoard[1]),
    new blackKnight('blackKnight2', chessBoard[6]),

    new whiteQueen('whiteQueen', chessBoard[59]),
    new blackQueen('blackQueen', chessBoard[3]),

    new whiteKing('whiteKing', chessBoard[60]),
    new blackKing('blackKing', chessBoard[4])
]

const play = new Game(board)