class Pawn extends Piece{
    constructor(r, c, color, moveStepX, moveStepY){
        super(r, c, color, moveStepX, moveStepY, "pawn", 0);
        this.image = this.getImage("Pawn");
    }

    movePossibilities(board){
        let actualRowIndex = this.r;
        //let actualRow = board[actualRowIndex];
        let nextRowIndex = parseInt(actualRowIndex + this.moveStepY);

        if(nextRowIndex < 0 || nextRowIndex > board.length){
            //implementar isso aqui!
            return "virou dama!"
        }

        console.log(actualRowIndex, nextRowIndex)

        let nextRow = board[nextRowIndex];
        let possibleMoves = [];

        nextRow.forEach(square => {
            //Common move (front)
            if(square.c === this.c){
                if(!this.hasPiece(square)){
                    possibleMoves.push({r: nextRowIndex, c: this.c, kill: false});
                }
            }

            //First move (2 squares)
            if(square.c === this.c && this.totalMoves === 0){
                if(!this.hasPiece(square)){
                    possibleMoves.push({r: nextRowIndex+1, c: this.c, kill: false});
                }
            }

            //Left move (kill)
            if(square.c === this.c-1){
                console.log(square)
                if(this.hasPiece(square)){
                    if(this.canKill(square)){
                        possibleMoves.push({r: nextRowIndex, c: this.c-1, kill: true});
                    }
                }
            }

            //Right move (kill)
            if(square.c === this.c+1){
                console.log(square)
                if(this.hasPiece(square)){
                    if(this.canKill(square)){
                        possibleMoves.push({r: nextRowIndex, c: this.c+1, kill: true});
                    }
                }
            }
        });

        return possibleMoves;
    }
}