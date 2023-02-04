class chessPiece {
    constructor(name, piece, id, position) {
        this.name = name,
        this.piece = piece,
        this.id = id,
        this.position = position
    }
    populateBoard(chessPiece) {
        document.getElementById(chessPiece.position).innerHTML = chessPiece.piece
    }
    hasId(id) {
        return this.id == id;
    }
    makeMove() {
        this.position = parseInt(position);
    }
}

class whitePawn extends chessPiece {
    constructor(name, position) {
        super(name, '♙', 'pawn', position)
    }
    getMoves() {
        const position = this.position;
        const move = eval(position + '10');
        return move;
    }       
}

class blackPawn extends chessPiece {
    constructor(name, position) {
        super(name, '♟', 'pawn', position)
    }
    getMoves() {
        const position = this.position;
        const move = eval(position - '10');
        return move;
    }         
}


 class whiteRook extends chessPiece {
    constructor(name, position) {
        super(name, '♖', 'rook', position)
    }
    getMoves() {
        const position = this.position;
    }  
 }

 class blackRook extends chessPiece {
    constructor(name, position) {
        super(name, '♜', 'rook', position)
    }
    getMoves() {
        const position = this.position;
    }  
 }

 class whiteKnight extends chessPiece {
    constructor(name, position) {
        super(name, '♘', 'knight', position)
    }
    getMoves() {
        const position = this.position;
    }  
 }

 class blackKnight extends chessPiece {
    constructor(name, position) {
        super(name, '♞', 'knight', position)
    }
    getMoves() {
        const position = this.position;
    }  
 }

class whiteBishop extends chessPiece {
    constructor(name, position) {
        super(name, '♗', 'bishop', position)
    }
    getMoves() {
        const position = this.position;
    }  
}

class blackBishop extends chessPiece {
    constructor(name, position) {
        super(name, '♝', 'bishop', position)
    }
    getMoves() {
        const position = this.position;
    }  
}

class whiteQueen extends chessPiece {
    constructor(name, position) {
        super(name, '♕', 'queen', position)
    }
    getMoves() {
        const position = this.position;
    }  
}

class blackQueen extends chessPiece {
    constructor(name, position) {
        super(name, '♛', 'queen', position)
    }
    getMoves() {
        const position = this.position;
    }  
}

class whiteKing extends chessPiece {
    constructor(name, position) {
        super(name, '♔', 'king', position)
    }
    getMoves() {
        const position = this.position;
    }  
}

class blackKing extends chessPiece {
    constructor(name, position) {
        super(name, '♚', 'kingp', position)
    }
    getMoves() {
        const position = this.position;
    }  
}