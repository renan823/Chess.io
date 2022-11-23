const blackPieces = {
    r1: 1,
    piecesInr1: [],
    r2: 2,
}
const whitePieces = {
    r1: 8,
    piecesInr1: [],
    r2: 7,
}


const init = (board)=>{

    let cont;

    //black pawns
    cont = 0;
    board[blackPieces.r2-1].forEach(square => {
        square.piece = new Pawn(cont+1, blackPieces.r2, "black", 1, 1);
        cont++
    });

    //white pawns
    cont = 0;
    board[whitePieces.r2-1].forEach(square => {
        square.piece = new Pawn(cont+1, whitePieces.r2, "white", -1, -1);
        cont++
    });

    return board;
}