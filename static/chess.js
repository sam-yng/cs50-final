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

const position = [
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
    document.getElementById(position).innerHTML = piece;
}

for (i = 0; i < 8; i++) {
    populateBoard(whitePawn, position[6][i]);
}

for (i = 0; i < 8; i++) {
    populateBoard(blackPawn, position[1][i]);
}

populateBoard(whiteRook, position[7][0]);
populateBoard(whiteRook, position[7][7]);
populateBoard(whiteKnight, position[7][1]);
populateBoard(whiteKnight, position[7][6]);
populateBoard(whiteBishop, position[7][2]);
populateBoard(whiteBishop, position[7][5]);
populateBoard(whiteQueen, position[7][3]);
populateBoard(whiteKing, position[7][4]);

populateBoard(blackRook, position[0][0]);
populateBoard(blackRook, position[0][7]);
populateBoard(blackKnight, position[0][1]);
populateBoard(blackKnight, position[0][6]);
populateBoard(blackBishop, position[0][2]);
populateBoard(blackBishop, position[0][5]);
populateBoard(blackQueen, position[0][3]);
populateBoard(blackKing, position[0][4]);

let squares = [];

for (i = 0; i <= 7; i++) {
    for (j = 0; j <= 7; j++) {
        squares.push(document.getElementById(position[i][j]));
    }
};

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
        item.classList.remove("toggled");
    })
};

setInterval(toggle, 1100);

