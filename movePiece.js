const round = {
    color: "white",
    clicks: 0,
    possibleMoves: [],
    actualPosition: {r: null, c: null},
    oldSquare: null
};

//Find a square in board with position (x, y)
const getSquare = (x, y, board)=>{
    for(let r = 0; r < board.length; r++){
        let row = board[r];
        if(getSquarePositionY(row[0], y)){
            for(let c = 0; c < row.length; c++){
                if(getSquarePositionX(row[c], x)){
                    return(row[c]);
                }
            }
        }
    }
}

const getSquarePositionY = (square, y)=>{
    return (((square.h + square.y) > y) && (square.y < y))
}

const getSquarePositionX = (square, x)=>{
    return (((square.w + square.x) > x) && (square.x < x))
}

const move = (board, canvas, e)=>{
    let x = e.clientX - canvas.offsetLeft + scrollX;
    let y = e.clientY - canvas.offsetTop + scrollY;
    let square = getSquare(x, y, board);
    if(round.clicks === 0){
        if(square.piece !== null){
            if(round.color === square.piece.color){
                round.possibleMoves = board[square.r][square.c].piece.movePossibilities(board);
                round.oldSquare = square;
                round.actualPosition.r = square.r;
                round.actualPosition.c = square.c;
                round.clicks++;
            }
        }
    }
    else{
        if(round.possibleMoves.length === 0){
            round.clicks = 0;
        }
        else{
            for(let i = 0; i < round.possibleMoves.length; i++){
                let item = round.possibleMoves[i];
                if(item.c === square.c && item.r === square.r){

                    let piece = board[round.actualPosition.r][round.actualPosition.c].piece;
                    piece.totalMoves++;
                    board[square.r][square.c].piece = piece;
                    board[square.r][square.c].piece.r = square.r;
                    board[square.r][square.c].piece.c = square.c;
                    board[round.actualPosition.r][round.actualPosition.c].piece = null;

                    //If a pawn walk all the board, make that a queen/bishop/rook/knight
                    if(piece.type === "pawn"){
                        if((square.r === 0 && square.piece.color === "white") || (square.r === board.length-1 && square.piece.color === "black")){
                            let color = square.piece.color
                            board[square.r][square.c].piece = null;
                            
                            let piece;
                            switch(choosePiece()){
                                case "queen": 
                                    piece = new Queen(square.r, square.c, color);
                                    break;
                                
                                case "bishop": 
                                    piece = new Bishop(square.r, square.c, color);
                                    break;
                                
                                case "knight":
                                    piece = new Knight(square.r, square.c, color); 
                                    break;

                                case "rook": 
                                    piece = new Rook(square.r, square.c, color);
                                    break;
                            }

                            board[square.r][square.c].piece = piece;

                        }
                    }

                    round.clicks = 0;
                    round.possibleMoves = [];
                    round.oldSquare = null;
                    if(round.color === "white"){
                        round.color = "black";
                    }
                    else{
                        round.color = "white"
                    }
                }
            }
        }
    }
    return board;
}
