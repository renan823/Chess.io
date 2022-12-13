class Pawn extends Piece{
    constructor(r, c, color, moveStep){
        super(r, c, color, "pawn", 0);
        this.moveStep = moveStep;
        this.image = this.getImage("Pawn");
    }

    movePossibilities(board){
        let actualRowIndex = this.r;
        let actualColumnIndex = this.c;
        let nextPosition = actualRowIndex+this.moveStep;
        let square;
        let possibleMoves = [];
        
        if(this.totalMoves === 0){
            square = board[nextPosition][actualColumnIndex]
            if(!this.hasPiece(square)){
                possibleMoves.push({r: nextPosition, c: actualColumnIndex, kill: false});
            }
            square = board[nextPosition+this.moveStep][actualColumnIndex]
            if(!this.hasPiece(square)){
                possibleMoves.push({r: nextPosition+this.moveStep, c: actualColumnIndex, kill: false});
            }
            
            return possibleMoves;
        }

        if(actualRowIndex > 0 && actualRowIndex < board.length -1){
            console.log(board[nextPosition])
            square = board[nextPosition][actualColumnIndex];
            if(!this.hasPiece(square)){
                possibleMoves.push({r: nextPosition, c: actualColumnIndex, kill: false});
            }

            if(actualColumnIndex + 1 < board.length){
                let rightSquare = board[nextPosition][actualColumnIndex + 1];
                if(this.hasPiece(rightSquare)){
                    if(this.canKill(rightSquare)){
                        possibleMoves.push({r: nextPosition, c: actualColumnIndex+1, kill: true});
                    }
                }
            }
    
            if(actualColumnIndex - 1 >= 0){
                let leftSquare = board[nextPosition][actualColumnIndex - 1];
                if(this.hasPiece(leftSquare)){
                    if(this.canKill(leftSquare)){
                        possibleMoves.push({r: nextPosition, c: actualColumnIndex-1, kill: true});
                    }
                }
            }
        }


    
        return possibleMoves;
    }
}