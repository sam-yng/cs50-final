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

const whitePawn = '♙';
const blackPawn = '♟';
const whiteRook = '♖';
const blackRook = '♜';
const whiteKnight = '♘';
const blackKnight = '♞';
const whiteBishop = '♗';
const blackBishop = '♝';
const whiteKing = '♔';
const blackKing = '♚';
const whiteQueen = '♕';
const blackQueen = '♛';

const positions = [
    ['81', '82', '83', '84', '85', '86', '87', '88'],
    ['71', '72', '73', '74', '75', '76', '77', '78'],
    ['61', '62', '63', '64', '65', '66', '67', '68'],
    ['51', '52', '53', '54', '55', '56', '57', '58'],
    ['41', '42', '43', '44', '45', '46', '47', '48'],
    ['31', '32', '33', '34', '35', '36', '37', '38'],
    ['21', '22', '23', '24', '25', '26', '27', '28'],
    ['11', '12', '13', '14', '15', '16', '17', '18']
]

const populateBoard = (piece, position) => {
    document.getElementById(position).innerText = piece;
}

for (i = 0; i < 8; i++) {
    populateBoard(whitePawn, positions[6][i]);
}

for (i = 0; i < 8; i++) {
    populateBoard(blackPawn, positions[1][i]);
}

populateBoard(whiteRook, positions[7][0]);
populateBoard(whiteRook, positions[7][7]);
populateBoard(whiteKnight, positions[7][1]);
populateBoard(whiteKnight, positions[7][6]);
populateBoard(whiteBishop, positions[7][2]);
populateBoard(whiteBishop, positions[7][5]);
populateBoard(whiteQueen, positions[7][3]);
populateBoard(whiteKing, positions[7][4]);

populateBoard(blackRook, positions[0][0]);
populateBoard(blackRook, positions[0][7]);
populateBoard(blackKnight, positions[0][1]);
populateBoard(blackKnight, positions[0][6]);
populateBoard(blackBishop, positions[0][2]);
populateBoard(blackBishop, positions[0][5]);
populateBoard(blackQueen, positions[0][3]);
populateBoard(blackKing, positions[0][4]);