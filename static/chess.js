let turn = 'White';
let showTurn = document.getElementById('show-turn');

const turnChange = () => {
    if (turn == 'White') {
        turn = 'Black';
        showTurn.innerHTML = 'Turn: black'
    } else {
        turn = 'White';
        showTurn.innerHTML = 'Turn: white'
    }
};

const chessBoard = [
    ['81', '82', '83', '84', '85', '86', '87', '88'],
    ['71', '72', '73', '74', '75', '76', '77', '78'],
    ['61', '62', '63', '64', '65', '66', '67', '68'],
    ['51', '52', '53', '54', '55', '56', '57', '58'],
    ['41', '42', '43', '44', '45', '46', '47', '48'],
    ['31', '32', '33', '34', '35', '36', '37', '38'],
    ['21', '22', '23', '24', '25', '26', '27', '28'],
    ['11', '12', '13', '14', '15', '16', '17', '18']
]

const whitePawnPiece =  '♙';
const blackPawnPiece = '♟';
const whiteRookPiece = '♖';
const blackRookPiece = '♜';
const whiteKnightPiece = '♘';
const blackKnightPiece = '♞';
const whiteBishopPiece = '♗';
const blackBishopPiece = '♝';
const whiteKingPiece = '♔';
const blackKingPiece = '♚';
const whiteQueenPiece = '♕';
const blackQueenPiece = '♛';

const whitePawn1 = {
    name: "whitePawn1",
    piece: whitePawnPiece,
    position: chessBoard[6][0]
}

const whitePawn2 = {
    name: "whitePawn2",
    piece: whitePawnPiece,
    position: chessBoard[6][1]
}

const whitePawn3 = {
    name: "whitePawn3",
    piece: whitePawnPiece,
    position: chessBoard[6][2]
}

const whitePawn4 = {
    name: "whitePawn4",
    piece: whitePawnPiece,
    position: chessBoard[6][3]
}

const whitePawn5 = {
    name: "whitePawn5",
    piece: whitePawnPiece,
    position: chessBoard[6][4]
}

const whitePawn6 = {
    name: "whitePawn6",
    piece: whitePawnPiece,
    position: chessBoard[6][5]
}

const whitePawn7 = {
    name: "whitePawn7",
    piece: whitePawnPiece,
    position: chessBoard[6][6]
}

const whitePawn8 = {
    name: "whitePawn8",
    piece: whitePawnPiece,
    position: chessBoard[6][7]
}

const blackPawn1 = {
    name: "blackPawn1",
    piece: blackPawnPiece,
    position: chessBoard[1][0]
}

const blackPawn2 = {
    name: "blackPawn2",
    piece: blackPawnPiece,
    position: chessBoard[1][1]
}

const blackPawn3 = {
    name: "blackPawn3",
    piece: blackPawnPiece,
    position: chessBoard[1][2]
}

const blackPawn4 = {
    name: "blackPawn4",
    piece: blackPawnPiece,
    position: chessBoard[1][3]
}

const blackPawn5 = {
    name: "blackPawn5",
    piece: blackPawnPiece,
    position: chessBoard[1][4]
}

const blackPawn6 = {
    name: "blackPawn6",
    piece: blackPawnPiece,
    position: chessBoard[1][5]
}

const blackPawn7 = {
    name: "blackPawn7",
    piece: blackPawnPiece,
    position: chessBoard[1][6]
}

const blackPawn8 = {
    name: "blackPawn8",
    piece: blackPawnPiece,
    position: chessBoard[1][7]
}

const whiteRook1 = {
    name: "whiteRook1",
    piece: whiteRookPiece,
    position: chessBoard[7][0]
}

const whiteRook2 = {
    name: "whiteRook1",
    piece: whiteRookPiece,
    position: chessBoard[7][7]
}

const blackRook1 = {
    name: "blackRook1",
    piece: blackRookPiece,
    position: chessBoard[0][0]
}

const blackRook2 = {
    name: "blackRook2",
    piece: blackRookPiece,
    position: chessBoard[0][7]
}

const whiteKnight1 = {
    name: "whiteKnight1",
    piece: whiteKnightPiece,
    position: chessBoard[7][1]
}

const whiteKnight2 = {
    name: "whiteKnight2",
    piece: whiteKnightPiece,
    position: chessBoard[7][6]
}

const blackKnight1 = {
    name: "blackKnight1",
    piece: blackKnightPiece,
    position: chessBoard[0][1]
}

const blackKnight2 = {
    name: "blackKnight2",
    piece: blackKnightPiece,
    position: chessBoard[0][6]
}

const whiteBishop1 = {
    name: "whiteBishop1",
    piece: whiteBishopPiece,
    position: chessBoard[7][2]
}

const whiteBishop2 = {
    name: "whiteBishop2",
    piece: whiteBishopPiece,
    position: chessBoard[7][5]
}

const blackBishop1 = {
    name: "blackBishop1",
    piece: blackBishopPiece,
    position: chessBoard[0][2]
}

const blackBishop2 = {
    name: "blackBishop1",
    piece: blackBishopPiece,
    position: chessBoard[0][5]
}

const whiteQueen = {
    name: "whiteQueen",
    piece: whiteQueenPiece,
    position: chessBoard[7][3]
}

const blackQueen = {
    name: "blackQueen",
    piece: blackQueenPiece,
    position: chessBoard[0][3]
}

const whiteKing = {
    name: "whiteKing",
    piece: whiteKingPiece,
    position: chessBoard[7][4]
}

const blackKing = {
    name: "blackKing",
    piece: blackKingPiece,
    position: chessBoard[0][4]
}

const populateBoard = (piece, position) => {
    document.getElementById(position).innerHTML = piece;
}

populateBoard(whitePawn1.piece, whitePawn1.position)
populateBoard(whitePawn2.piece, whitePawn2.position)
populateBoard(whitePawn3.piece, whitePawn3.position)
populateBoard(whitePawn4.piece, whitePawn4.position)
populateBoard(whitePawn5.piece, whitePawn5.position)
populateBoard(whitePawn6.piece, whitePawn6.position)
populateBoard(whitePawn7.piece, whitePawn7.position)
populateBoard(whitePawn8.piece, whitePawn8.position)

populateBoard(blackPawn1.piece, blackPawn1.position)
populateBoard(blackPawn2.piece, blackPawn2.position)
populateBoard(blackPawn3.piece, blackPawn3.position)
populateBoard(blackPawn4.piece, blackPawn4.position)
populateBoard(blackPawn5.piece, blackPawn5.position)
populateBoard(blackPawn6.piece, blackPawn6.position)
populateBoard(blackPawn7.piece, blackPawn7.position)
populateBoard(blackPawn8.piece, blackPawn8.position)

populateBoard(whiteRook1.piece, whiteRook1.position)
populateBoard(whiteRook2.piece, whiteRook2.position)
populateBoard(blackRook1.piece, blackRook1.position)
populateBoard(blackRook2.piece, blackRook2.position)

populateBoard(whiteKnight1.piece, whiteKnight1.position)
populateBoard(whiteKnight2.piece, whiteKnight2.position)
populateBoard(blackKnight1.piece, blackKnight1.position)
populateBoard(blackKnight2.piece, blackKnight2.position)

populateBoard(whiteBishop1.piece, whiteBishop1.position)
populateBoard(whiteBishop2.piece, whiteBishop2.position)
populateBoard(blackBishop1.piece, blackBishop1.position)
populateBoard(blackBishop2.piece, blackBishop2.position)

populateBoard(whiteKing.piece, whiteKing.position)
populateBoard(whiteQueen.piece, whiteQueen.position)
populateBoard(blackKing.piece, blackKing.position)
populateBoard(blackQueen.piece, blackQueen.position)

let squares = [];

for (i = 0; i <= 7; i++) {
    for (j = 0; j <= 7; j++) {
        squares.push(document.getElementById(chessBoard[i][j]));
    }
};

// console.log(squares);

for (i = 0; i < 64; i++) {
    if (squares[i].innerHTML) {
        squares[i].classList.add('occupied');
    } else {
        squares[i].classList.remove('occupied')
    }
};

const toggle = () => {
    document.querySelectorAll('.occupied').forEach(item => {
        item.addEventListener('click', event => {
            unToggle();
            item.classList.add('toggled')
        })
    })
};

const unToggle = () => {
    document.querySelectorAll('.toggled').forEach(item => {
        item.classList.remove('toggled');
    })
};

setInterval(toggle, 1100)
