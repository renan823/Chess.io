class King extends Piece{
    constructor(r, c, color){
        super(r, c, color, "king", 0);
        this.image = this.getImage("King");
    }

    canMove(board, possibleMoves, r, c){
        let square = board[r][c];
        if(this.hasPiece(square)){
            if(this.canKill(square)){
                possibleMoves.push({r: r, c: c, kill: true});
            }
        }
        else{
            possibleMoves.push({r: r, c: c, kill: false});
        }
        return possibleMoves;
    }

    movePossibilities(board){
        let actualRowIndex = this.r;
        let actualColumnIndex = this.c;
        let possibleMoves = []

        //Up
        if(actualRowIndex > 0){
            possibleMoves = this.canMove(board, possibleMoves, actualRowIndex-1, actualColumnIndex);
        }

        //Down
        if(actualRowIndex < board.length-1){
            possibleMoves = this.canMove(board, possibleMoves, actualRowIndex+1, actualColumnIndex);
        }

        //Right
        if(actualColumnIndex < board.length-1){
            possibleMoves = this.canMove(board, possibleMoves, actualRowIndex, actualColumnIndex+1);
        }

        //Left
        if(actualColumnIndex > 0){
            possibleMoves = this.canMove(board, possibleMoves, actualRowIndex, actualColumnIndex-1);
        }

        //upRight 
        if(actualRowIndex > 0 && actualColumnIndex < board.length-1){
            possibleMoves = this.canMove(board, possibleMoves, actualRowIndex-1, actualColumnIndex+1);
        }

        //upLeft
        if(actualRowIndex > 0 && actualColumnIndex > 0){
            possibleMoves = this.canMove(board, possibleMoves, actualRowIndex-1, actualColumnIndex-1);
        }

        //downRight
        if(actualRowIndex < board.length-1 && actualColumnIndex < board.length-1){
            possibleMoves = this.canMove(board, possibleMoves, actualRowIndex+1, actualColumnIndex+1);
        }

        //downLeft
        if(actualRowIndex < board.length-1 && actualColumnIndex > 0){
            possibleMoves = this.canMove(board, possibleMoves, actualRowIndex+1, actualColumnIndex-1);
        }
        
        return possibleMoves;
    }
}