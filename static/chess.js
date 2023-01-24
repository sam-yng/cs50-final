let a8 = document.getElementById('a8');
let b8 = document.getElementById('b8');
let c8 = document.getElementById('c8');
let d8 = document.getElementById('d8');
let e8 = document.getElementById('e8');
let f8 = document.getElementById('f8');
let g8 = document.getElementById('g8');
let h8 = document.getElementById('h8');

let a7 = document.getElementById('a7');
let b7 = document.getElementById('b7');
let c7 = document.getElementById('c7');
let d7 = document.getElementById('d7');
let e7 = document.getElementById('e7');
let f7 = document.getElementById('f7');
let g7 = document.getElementById('g7');
let h7 = document.getElementById('h7');

let a1 = document.getElementById('a1');
let b1 = document.getElementById('b1');
let c1 = document.getElementById('c1');
let d1 = document.getElementById('d1');
let e1 = document.getElementById('e1');
let f1 = document.getElementById('f1');
let g1 = document.getElementById('g1');
let h1 = document.getElementById('h1');

let a2 = document.getElementById('a2');
let b2 = document.getElementById('b2');
let c2 = document.getElementById('c2');
let d2 = document.getElementById('d2');
let e2 = document.getElementById('e2');
let f2 = document.getElementById('f2');
let g2 = document.getElementById('g2');
let h2 = document.getElementById('h2');

let a3 = document.getElementById('a3');
let b3 = document.getElementById('b3');
let c3 = document.getElementById('c3');
let d3 = document.getElementById('d3');
let e3 = document.getElementById('e3');
let f3 = document.getElementById('f3');
let g3 = document.getElementById('g3');
let h3 = document.getElementById('h3');

let a4 = document.getElementById('a4');
let b4 = document.getElementById('b4');
let c4 = document.getElementById('c4');
let d4 = document.getElementById('d4');
let e4 = document.getElementById('e4');
let f4 = document.getElementById('f4');
let g4 = document.getElementById('g4');
let h4 = document.getElementById('h4');

let a5 = document.getElementById('a5');
let b5 = document.getElementById('b5');
let c5 = document.getElementById('c5');
let d5 = document.getElementById('d5');
let e5 = document.getElementById('e5');
let f5 = document.getElementById('f5');
let g5 = document.getElementById('g5');
let h5 = document.getElementById('h5');

let a6 = document.getElementById('a6');
let b6 = document.getElementById('b6');
let c6 = document.getElementById('c6');
let d6 = document.getElementById('d6');
let e6 = document.getElementById('e6');
let f6 = document.getElementById('f6');
let g6 = document.getElementById('g6');
let h6 = document.getElementById('h6');

let board = [
    [a8, b8, c8, d8, e8, f8, g8, h8],
    [a7, b7, c7, d7, e7, f7, g7, h7],
    [a6, b6, c6, d6, e6, f6, g6, h6],
    [a5, b5, c5, d5, e5, f5, g5, h5],
    [a4, b4, c4, d4, e4, f4, g4, h4],
    [a3, b3, c3, d3, e3, f3, g3, h3],
    [a2, b2, c2, d2, e2, f2, g2, h2],
    [a1, b1, c1, d1, e1, f1, g1, h1]
]

class ChessPiece {
    constructor(name, piece, position) {
        this.name = name;
        this.piece = piece;
        this.position = position
    }
};

let wPawn8 = new ChessPiece("pawn", "♙", a7);
let wPawn7 = new ChessPiece("pawn", "♙", b7);
let wPawn6 = new ChessPiece("pawn", "♙", c7);
let wPawn5 = new ChessPiece("pawn", "♙", d7);
let wPawn4 = new ChessPiece("pawn", "♙", e7);
let wPawn3 = new ChessPiece("pawn", "♙", f7);
let wPawn2 = new ChessPiece("pawn", "♙", g7);
let wPawn1 = new ChessPiece("pawn", "♙", h7);


let bPawn8 = new ChessPiece("pawn", "♟", a2);
let bPawn7 = new ChessPiece("pawn", "♟", b2);
let bPawn6 = new ChessPiece("pawn", "♟", c2);
let bPawn5 = new ChessPiece("pawn", "♟", d2);
let bPawn4 = new ChessPiece("pawn", "♟", e2);
let bPawn3 = new ChessPiece("pawn", "♟", f2);
let bPawn2 = new ChessPiece("pawn", "♟", g2);
let bPawn1 = new ChessPiece("pawn", "♟", h2);

// a7 = pawn8 piece
wPawn8.position.innerHTML = wPawn8.piece;
// b7 = pawn7 piece
wPawn7.position.innerHTML = wPawn7.piece;
wPawn6.position.innerHTML = wPawn6.piece;
wPawn5.position.innerHTML = wPawn5.piece;
wPawn4.position.innerHTML = wPawn4.piece;
wPawn3.position.innerHTML = wPawn3.piece;
wPawn2.position.innerHTML = wPawn2.piece;
wPawn1.position.innerHTML = wPawn1.piece;

bPawn8.position.innerHTML = bPawn8.piece;
bPawn7.position.innerHTML = bPawn7.piece;
bPawn6.position.innerHTML = bPawn6.piece;
bPawn5.position.innerHTML = bPawn5.piece;
bPawn4.position.innerHTML = bPawn4.piece;
bPawn3.position.innerHTML = bPawn3.piece;
bPawn2.position.innerHTML = bPawn2.piece;
bPawn1.position.innerHTML = bPawn1.piece;

let wRook1 = new ChessPiece("rook", "♖", a8);
let wKnight1 = new ChessPiece("knight", "♘", b8);
let wBishop1 = new ChessPiece("bishop", "♗", c8);
let wKing = new ChessPiece("king", "♔", d8);
let wQueen = new ChessPiece("queen", "♕", e8)
let wBishop2 = new ChessPiece("bishop", "♗", f8);
let wKnight2 = new ChessPiece("knight", "♘", g8);
let wRook2 = new ChessPiece("rook", "♖", h8);

let bRook1 = new ChessPiece("rook", "♜", a1);
let bKnight1 = new ChessPiece("knight", "♞", b1);
let bBishop1 = new ChessPiece("bishop", "♝", c1);
let bKing = new ChessPiece("king", "♚", d1);
let bQueen = new ChessPiece("queen", "♛", e1)
let bBishop2 = new ChessPiece("bishop", "♝", f1);
let bKnight2 = new ChessPiece("knight", "♞", g1);
let bRook2 = new ChessPiece("rook", "♜", h1);

wRook1.position.innerHTML = wRook1.piece;
wKnight1.position.innerHTML = wKnight1.piece;
wBishop1.position.innerHTML = wBishop1.piece;
wKing.position.innerHTML = wKing.piece;
wQueen.position.innerHTML = wQueen.piece;
wBishop2.position.innerHTML = wBishop2.piece;
wKnight2.position.innerHTML = wKnight2.piece;
wRook2.position.innerHTML = wRook2.piece;

bRook1.position.innerHTML = bRook1.piece;
bKnight1.position.innerHTML = bKnight1.piece;
bBishop1.position.innerHTML = bBishop1.piece;
bKing.position.innerHTML = bKing.piece;
bQueen.position.innerHTML = bQueen.piece;
bBishop2.position.innerHTML = bBishop2.piece;
bKnight2.position.innerHTML = bKnight2.piece;
bRook2.position.innerHTML = bRook2.piece;

let turn = 'white';
let showTurn = document.getElementById('show-turn');

const turnChange = () => {
    if (turn == 'white') {
        turn = 'black';
        showTurn.innerHTML = 'Turn: black'
    } else {
        turn = 'white';
        showTurn.innerHTML = 'Turn: whit'
    }
};

