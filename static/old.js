class ChessPiece {
    constructor(name, position, color) {
        this.name = name
        this.position = position
        this.color = color
        this.id = document.getElementById(this.name)
    }
}

class Pawn extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }

    getMoves() {
        const position = parseInt(this.position)
        const moves = []

        if (Game.firstMove === true) {
            this.color === 'white' ? 
            moves.push(position + 10, position + 20) : 
            moves.push(position - 10, position - 20)

            return moves

        } else {
            this.color === 'white' ? 
            moves.push(position + 10) : 
            moves.push(position - 10)

            return moves
        }
    }
}

 class Rook extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }

    getMoves() {
        const position = parseInt(this.position)
        const moves = []
        
        for (let i = position + 10; i <= 80; i--) moves.push(i)
        for (let i = position + 1; i <= 8; i--) moves.push(i)
        for (let i = position - 10; i <= 80; i--) moves.push(i)
        for (let i = position - 1; i <= 8; i--) moves.push(i)

        return moves
    }
 }

 class Knight extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }
     
    getMoves() {
        const position = parseInt(this.position)
        const moves = []

        moves.push(position + 21, position - 21, position + 19, position - 19,
                position + 12, position - 12, position + 8, position - 8)

        return moves
    }
 }

class Bishop extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }

    getMoves() {
        const position = parseInt(this.position)
        const moves = []
        
        for (let i = position + 11; i <= 80; i--) moves.push(i)
        for (let i = position + 9; i <= 8; i--) moves.push(i)
        for (let i = position - 11; i <= 80; i--) moves.push(i)
        for (let i = position - 9; i <= 8; i--) moves.push(i)

        return moves
    }
}

class Queen extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }

    getMoves() {
        const position = parseint(this.position)
        const moves = []
        
        for (let i = position + 10; i <= 80; i--) moves.push(i)
        for (let i = position + 1; i <= 8; i--) moves.push(i)
        for (let i = position - 10; i <= 80; i--) moves.push(i)
        for (let i = position - 1; i <= 8; i--) moves.push(i)
        for (let i = position + 11; i <= 80; i--) moves.push(i)
        for (let i = position + 9; i <= 8; i--) moves.push(i)
        for (let i = position - 11; i <= 80; i--) moves.push(i)
        for (let i = position - 9; i <= 8; i--) moves.push(i)

        return moves
    }
}


class King extends ChessPiece {
    constructor(name, position, color) {
        super(name, position, color)
    }

    getMoves() {
        const position = parseInt(this.position)
        const moves = []

        moves.push(position + 10, position - 10, position + 1, position - 1,
            position + 11, position - 11, position + 9, position - 9)

        return moves
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


class Game {
    constructor(board) {
        this.board = document.getElementById('board');
        this.firstMove = true;
        this.boxes = document.querySelectorAll('.box');
        this.turn = 'white';
        this.pieces = [
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


    }


    changeTurn() {
        if (this.turn === 'white') {
            turn === 'black'
        } else if (this.turn === 'black') {
            turn === 'white'
            this.firstMove === false
        }  
    }


    // below populates board with piece text and sets classNames as per the piece
    // might have to use images

    // populateBoard() {
    //     this.pieces.forEach(piece => { 
    //         document.getElementById(piece.position).innerHTML = piece.getPiece()
    //         document.getElementById(piece.position).classList.add(piece.name)
    //     })
    // }

    // adding a div for each piece for toggling purposes (didn't quite work)
    // board needs to be populated by pieces, not piece text
    
    // addDiv() {
    //     this.pieces.forEach(piece => {
    //         let node = document.createElement("div")
    //         document.getElementById(piece.position).appendChild(node)
    //         node.setAttribute("id", piece.position)
    //         document.getElementById(piece.position).innerText = piece.getPiece()
    //     })
    // }  

}

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

const game = new Game(board)