class Rook extends Piece{
    constructor(c, r, color, moveStepX, moveStepY){
        super(c, r, color, moveStepX, moveStepY, "rook", 0);
    }

    
    movePossibilities(board){
        let actualRowIndex = this.r;
        let actualColumnIndex = this.c;

        let possibleMoves = []
        //up move
        if(!actualRowIndex == 0){
            for(let i = actualRowIndex-1; i >= 0; i--){
                let square = board[i][actualColumnIndex];
                if(this.hasPiece(square)){
                    if(this.canKill(square)){
                        possibleMoves.push({r: i, c: this.c-1, kill: true});
                        break;
                    }
                    break;
                }
                else{
                    possibleMoves.push({r: i, c: this.c-1, kill: false});
                }
            }
        }

        //down move
        if(!this.r-1 === board.length){
            
        }

        //left move
        if(!this.c-1 === 0){

        }

        //right move
        if(!this.c-1 === board.length){

        }


        return possibleMoves;
    }
}