class ChessPiece {
    constructor(name, position, color) {
        this.name = name,
        this.position = position
        this.color = color
    }
    
}

class Pawn extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }
    getPiece() {
        return (this.color === 'black' ? '♟' : '♙')
    }
    getMoves() {
        if (Game.firstMove === true) {
            return (this.color === 'white' ? 
            (parseInt(this.position.toString()) + 10).toString() &&
            (parseInt(this.position.toString()) + 20).toString() : 
            (parseInt(this.position.toString()) - 10).toString() &&
            (parseInt(this.position.toString()) - 20).toString())
        } else {
            return (this.color === 'white' ? 
            (parseInt(this.position.toString()) + 10).toString() : 
            (parseInt(this.position.toString()) - 10).toString())
        }
    }
}

 class Rook extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }
     getPiece() {
        return (this.color === 'black' ? '♜' : '♖')
    }
    getMoves() {
        
    }
 }

 class Knight extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }
     getPiece() {
        return (this.color === 'black' ? '♞' : '♘')
    }
    getMoves() {
        
    }
 }

class Bishop extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }
     getPiece() {
        return (this.color === 'black' ? '♝' : '♗')
    }
    getMoves() {
        
    }
}

class Queen extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }
     getPiece() {
        return (this.color === 'black' ? '♛' : '♕')
    }
    getMoves() {
        
    }
}


class King extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }
     getPiece() {
        return (this.color === 'black' ? '♚' : '♔')
    }
    getMoves() {
        
    }
}

class Game {
    constructor(board) {
        this.board = board;
        this.firstMove = true;
        this.boxes = document.querySelectorAll('.box');
        this.pieces = pieces;
        this.turn = 'white';
        this.placePieces();
        this.identifyPieces();
        this.occupied = document.querySelectorAll('.occupied');
        this.allowToggle()
        this.toggled = document.querySelector('.toggled')
    }

    changeTurn() {
        if (this.turn == 'white') {
            turn == 'black'
        } else if (this.turn == 'black') {
            turn == 'white'
            this.firstMove === false
        }  
    }

    placePieces() {
        this.pieces.forEach(item => {
            document.getElementById(item.position).innerHTML = item.getPiece();
        });
    }

    identifyPieces() {
        this.boxes.forEach(square => {
            if (square.innerHTML) {
                square.classList.add('occupied');
            } else {
                square.classList.remove('occupied');
            }
        });
    };

    allowToggle() {
        this.pieces.forEach(square => {
            square.addEventListener('click', event => {
                this.unToggle()
                square.classList.add('toggled')
                this.showMoves()
            })
        })
    }

    unToggle() {
        document.querySelectorAll('.toggled').forEach(item => {
            item.classList.remove('toggled');
        })
    }

    showMoves() {
        document.getElementById(this.pieces.getMoves()).classList.add('move')
    }
}


const board = [
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
    new Pawn('whitePawn1', '21', 'white'),
    new Pawn('whitePawn2', '22', 'white'),
    new Pawn('whitePawn3', '23', 'white'),
    new Pawn('whitePawn4', '24', 'white'),
    new Pawn('whitePawn5', '25', 'white'),
    new Pawn('whitePawn6', '26', 'white'),
    new Pawn('whitePawn7', '27', 'white'),
    new Pawn('whitePawn8', '28', 'white'),

    new Pawn('blackPawn1', '71', 'black'),
    new Pawn('blackPawn2', '72', 'black'),
    new Pawn('blackPawn3', '73', 'black'),
    new Pawn('blackPawn4', '74', 'black'),
    new Pawn('blackPawn5', '75', 'black'),
    new Pawn('blackPawn6', '76', 'black'),
    new Pawn('blackPawn7', '77', 'black'),
    new Pawn('blackPawn8', '78', 'black'),

    new Rook('whiteRook1', '11', 'white'),
    new Rook('whiteRook2', '18', 'white'),

    new Rook('blackRook1', '81', 'black'),
    new Rook('blackRook1', '88', 'black'),

    new Bishop('whiteBishop1', '13', 'white'),
    new Bishop('whiteBishop2', '16', 'white'),

    new Bishop('blackBishop1', '83', 'black'),
    new Bishop('blackBishop2', '86', 'black'),

    new Knight('whiteKnight1', '12', 'white'),
    new Knight('whiteKnight2', '17', 'white'),

    new Knight('blackKnight1', '82', 'black'),
    new Knight('blackKnight2', '87', 'black'),

    new Queen('whiteQueen', '14', 'white'),
    new Queen('blackQueen', 84, 'black'),

    new King('whiteKing', '15', 'white'),
    new King('blackKing', '85', 'black')
]


const play = new Game(board)