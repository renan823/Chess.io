class Piece{
    constructor(r, c, color, type, totalMoves){
        this.r = r;
        this.c = c;
        this.color = color;
        this.type = type;
        this.totalMoves = totalMoves;
    }

    canKill(square){
        if(square.piece.color === this.color){
            return false;
        }

        if(square.piece.type === "king"){
            return false;
        }

        return true;
    }

    hasPiece(square){
        if(square.piece === null){
            return false;
        }

        return true;
    }

    move(row, column, board){
        let square = board[row][column];
        if(this.hasPiece(square)){
            if(this.canKill(square)){
                return({r: row, c: column, kill: true});  
            } 
        }
        else{
            return({r: row, c: column, kill: false});
        }
    }
}