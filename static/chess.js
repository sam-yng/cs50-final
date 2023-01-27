let turn = 'white';
let showTurn = document.getElementById('show-turn');
showTurn.innerHTML = 'Turn: white'

const turnChange = () => {
    if (turn == 'white') {
        turn = 'black';
        showTurn.innerHTML = 'Turn: black'
    } else {
        turn = 'white';
        showTurn.innerHTML = 'Turn: white'
    }
};

const chessBoard = [
    '81', '82', '83', '84', '85', '86', '87', '88',
    '71', '72', '73', '74', '75', '76', '77', '78',
    '61', '62', '63', '64', '65', '66', '67', '68',
    '51', '52', '53', '54', '55', '56', '57', '58',
    '41', '42', '43', '44', '45', '46', '47', '48',
    '31', '32', '33', '34', '35', '36', '37', '38',
    '21', '22', '23', '24', '25', '26', '27', '28',
    '11', '12', '13', '14', '15', '16', '17', '18'
]

class chessPiece {
    constructor(name, piece, position) {
        this.name = name,
        this.piece = piece,
        this.position = position
    }
    populateBoard(chessPiece) {
        document.getElementById(chessPiece.position).innerHTML = chessPiece.piece
    }
}

class whitePawn extends chessPiece {
    constructor(name, position) {
        super(name, '♙', position)
    }       
}

class blackPawn extends chessPiece {
    constructor(name, position) {
        super(name, '♟', position)
    }       
}

 class whiteRook extends chessPiece {
    constructor(name, position) {
        super(name, '♖', position)
    }
 }

 class blackRook extends chessPiece {
    constructor(name, position) {
        super(name, '♜', position)
    }
 }

 class whiteKnight extends chessPiece {
    constructor(name, position) {
        super(name, '♘', position)
    }
 }

 class blackKnight extends chessPiece {
    constructor(name, position) {
        super(name, '♞', position)
    }
 }

class whiteBishop extends chessPiece {
    constructor(name, position) {
        super(name, '♗', position)
    }
}

class blackBishop extends chessPiece {
    constructor(name, position) {
        super(name, '♝', position)
    }
}

class whiteQueen extends chessPiece {
    constructor(name, position) {
        super(name, '♕', position)
    }
}

class blackQueen extends chessPiece {
    constructor(name, position) {
        super(name, '♛', position)
    }
}

class whiteKing extends chessPiece {
    constructor(name, position) {
        super(name, '♔', position)
    }
}

class blackKing extends chessPiece {
    constructor(name, position) {
        super(name, '♚', position)
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

for (i = 0; i < 32; i++) {
    pieces[i].populateBoard(pieces[i])
}

let squares = [];

for (i = 0; i <= 63; i++) {
    squares.push(document.getElementById(chessBoard[i]));
}

for (i = 63; i >= 32; i--) {
    if (squares[i].innerHTML) {
        squares[i].classList.add('whitePiece');
    } else {
        squares[i].classList.remove('whitePiece')
    }
};

for (i = 0; i <= 32; i++) {
    if (squares[i].innerHTML) {
        squares[i].classList.add('blackPiece');
    } else {
        squares[i].classList.remove('blackPiece')
    }
};

let whitePieces = document.querySelectorAll('.whitePiece')
let blackPieces = document.querySelectorAll('.blackPiece')
const color = turn == 'white' ? whitePieces : blackPieces;

const toggle = () => {
    color.forEach(item => {
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