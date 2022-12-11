const blackPieces = {
    r1: 0,
    piecesInr1: [
        new Rook(0, 0, "black"), 
        new Knight(0, 1, "black"), 
        new Bishop(0, 2, "black"), 
        new Queen(0, 3, "black"), 
        new King(0, 4, "black"),
        new Bishop(0, 5, "black"), 
        new Knight(0, 6, "black"), 
        new Rook(0, 7, "black"), 
    ],
    r2: 1,
}
const whitePieces = {
    r1: 7,
    piecesInr1: [
        new Rook(7, 0, "white"), 
        new Knight(7, 1, "white"), 
        new Bishop(7, 2, "white"), 
        new Queen(7, 3, "white"), 
        new King(7, 4, "white"),
        new Bishop(7, 5, "white"), 
        new Knight(7, 6, "white"), 
        new Rook(7, 7, "white"), 
    ],
    r2: 6,
}


const init = (board)=>{

    let cont;
    //black pawns
    cont = 0;
    board[blackPieces.r2].forEach(square => {
        square.piece = new Pawn(cont+1, blackPieces.r2, "black", 1, 1);
        cont++
    });

    //white pawns
    cont = 0;
    board[whitePieces.r2].forEach(square => {
        square.piece = new Pawn(cont+1, whitePieces.r2, "white", -1, -1);
        cont++
    });

    //black pieces
    cont = 0
    board[blackPieces.r1].forEach(square => {
        square.piece = blackPieces.piecesInr1[cont];
        cont++;
    })

    //black pieces
    cont = 0
    board[whitePieces.r1].forEach(square => {
        square.piece = whitePieces.piecesInr1[cont];
        cont++;
    })

    return board;
}