class Piece{
    constructor(r, c, color, moveStepX, moveStepY, type, totalMoves){
        this.r = r;
        this.c = c;
        this.color = color;
        this.moveStepX = moveStepX;
        this.moveStepY = moveStepY;
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
}