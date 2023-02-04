let turn = 'white';
// let turn = 'black';
let showTurn = document.getElementById('show-turn');
showTurn.innerHTML = 'Turn: white'

const turnChange = () => {
    if (turn == 'white') {
        showTurn.innerHTML = 'Turn: black'
        turn = 'black';
    } else if (turn == 'black') {
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

const whitePieces = [
    '♔', '♕', '♗', '♘', '♖', '♙'
]

const blackPieces = [
    '♚', '♛', '♝', '♞', '♜', '♟'
]

for (i = 0; i < 32; i++) {
    pieces[i].populateBoard(pieces[i])
}

let squares = [];

for (i = 0; i <= 63; i++) {
    squares.push(document.getElementById(chessBoard[i]));
}

const spaceCheck = () => {
    for (i = 0; i <= 63; i++) {
        if (squares[i].innerHTML) {
            squares[i].classList.add('occupied');
        } else {
            squares[i].classList.remove('occupied')
            squares[i].classList.remove('whitePiece')
            squares[i].classList.remove('blackPiece')
        }
    }
};

const whiteCheck = () => {
    document.querySelectorAll('.occupied').forEach(item => {
        for (i = 0; i < 6; i++) {
            if (item.innerHTML == whitePieces[i]) {
                item.classList.add('whitePiece')
                item.classList.remove('occupied')
            } 
        }
    })
};

const blackCheck = () => {
    document.querySelectorAll('.occupied').forEach(item => {
        for (i = 0; i < 6; i++) {
            if (item.innerHTML == blackPieces[i]) {
                item.classList.add('blackPiece')
                item.classList.remove('occupied')
            } 
        }
    })
};

spaceCheck();
whiteCheck();
blackCheck();

const toggle = () => {
    if (turn == 'white') {
        document.querySelectorAll('.whitePiece').forEach(item => {
            item.addEventListener('click', event => {
                unToggle()
                removeMove()
                item.classList.add('toggled')
                toggleMove()
                allowMove()
                item.removeEventListener('click', event)
            })
        })
    } else if (turn == 'black') {
        document.querySelectorAll('.blackPiece').forEach(item => {
            item.addEventListener('click', event => {
                unToggle()
                removeMove()
                item.classList.add('toggled')
                toggleMove()
                allowMove()
                item.removeEventListener('click', event)
            })
        })
    }
};

const unToggle = () => {
    document.querySelectorAll('.toggled').forEach(item => {
        item.classList.remove('toggled');
    })
};

const removeMove = () => {
    document.querySelectorAll('.move').forEach(item => {
        item.classList.remove('move');
    })
}

setInterval(toggle, 1000);

const toggleMove = () => {
    document.querySelectorAll('.toggled').forEach(item => {
        if (item.innerHTML == whitePieces[5]) {
            let poz = parseInt(item.id);
            poz += 10;
            let newPoz = poz.toString()
            let block = document.getElementById(newPoz)
            block.classList.add('move')
        }

        else if (item.innerHTML == blackPieces[5]) {
            let poz = parseInt(item.id);
            poz -= 10;
            let newPoz = poz.toString()
            let block = document.getElementById(newPoz)
            block.classList.add('move')
        }

       else if (item.innerHTML == whitePieces[2]) {
            let poz1 = parseInt(item.id);
            poz1 += 9;
            let poz2 = parseInt(item.id);
            poz2 += 11
            let newPoz1 = poz1.toString()
            let newPoz2 = poz2.toString()
            let block1 = document.getElementById(newPoz1)
            let block2 = document.getElementById(newPoz2)
            block1.classList.add('move')
            block2.classList.add('move')
        }

        else if (item.innerHTML == blackPieces[2]) {
            let poz1 = parseInt(item.id);
            poz1 -= 9;
            let poz2 = parseInt(item.id);
            poz2 -= 11
            let newPoz1 = poz1.toString()
            let newPoz2 = poz2.toString()
            let block1 = document.getElementById(newPoz1)
            let block2 = document.getElementById(newPoz2)
            block1.classList.add('move')
            block2.classList.add('move')
        }

        else if (item.innerHTML == whitePieces[0]) {
            let poz1 = parseInt(item.id);
            poz1 += 10;
            let newPoz1 = poz1.toString()
            let block1 = document.getElementById(newPoz1)
            block1.classList.add('move')

            let poz2 = parseInt(item.id);
            poz2 -= 10;
            let newPoz2 = poz2.toString()
            let block2 = document.getElementById(newPoz2)
            block2.classList.add('move')

            let poz4 = parseInt(item.id);
            poz4 += 5;
            let newPoz4 = poz4.toString()
            let block4 = document.getElementById(newPoz4)
            block4.classList.add('move')

            let poz3 = parseInt(item.id);
            poz3 -= 5;
            let newPoz3 = poz3.toString()
            let block3 = document.getElementById(newPoz3)
            block3.classList.add('move')

            let poz5 = parseInt(item.id);
            poz5 += 9;
            let newPoz5 = poz5.toString()
            let block5 = document.getElementById(newPoz5)
            block5.classList.add('move')

            let poz6 = parseInt(item.id);
            poz6 -= 9;
            let newPoz6 = poz6.toString()
            let block6 = document.getElementById(newPoz6)
            block6.classList.add('move')

            let poz7 = parseInt(item.id);
            poz7 += 11;
            let newPoz7 = poz7.toString()
            let block7 = document.getElementById(newPoz7)
            block7.classList.add('move')

            let poz8 = parseInt(item.id);
            poz8 -= 11;
            let newPoz8 = poz8.toString()
            let block8 = document.getElementById(newPoz8)
            block8.classList.add('move')
        }

        else if (item.innerHTML == blackPieces[0]) {
            let poz1 = parseInt(item.id);
            poz1 += 10;
            let newPoz1 = poz1.toString()
            let block1 = document.getElementById(newPoz1)
            block1.classList.add('move')

            let poz2 = parseInt(item.id);
            poz2 -= 10;
            let newPoz2 = poz2.toString()
            let block2 = document.getElementById(newPoz2)
            block2.classList.add('move')

            let poz4 = parseInt(item.id);
            poz4 += 5;
            let newPoz4 = poz4.toString()
            let block4 = document.getElementById(newPoz4)
            block4.classList.add('move')

            let poz3 = parseInt(item.id);
            poz3 -= 5;
            let newPoz3 = poz3.toString()
            let block3 = document.getElementById(newPoz3)
            block3.classList.add('move')

            let poz5 = parseInt(item.id);
            poz5 += 9;
            let newPoz5 = poz5.toString()
            let block5 = document.getElementById(newPoz5)
            block5.classList.add('move')

            let poz6 = parseInt(item.id);
            poz6 -= 9;
            let newPoz6 = poz6.toString()
            let block6 = document.getElementById(newPoz6)
            block6.classList.add('move')

            let poz7 = parseInt(item.id);
            poz7 += 11;
            let newPoz7 = poz7.toString()
            let block7 = document.getElementById(newPoz7)
            block7.classList.add('move')

            let poz8 = parseInt(item.id);
            poz8 -= 11;
            let newPoz8 = poz8.toString()
            let block8 = document.getElementById(newPoz8)
            block8.classList.add('move')
        }
    })
}

const allowMove = () => {
    let newElem = document.querySelector('.move')
    let oldElem = document.querySelector('.toggled').innerHTML

    newElem.addEventListener('click', function() {
        newElem.innerHTML = oldElem;
        document.querySelector('.toggled').innerHTML = "";
        document.querySelector('.toggled').classList.remove('.toggled');
        newElem.classList.remove('move');
        turnChange();
        spaceCheck();
        whiteCheck();
        blackCheck();
    })
};