class Rook extends Piece{
    constructor(r, c, color){
        super(r, c, color, 7, 7, "rook", 0);
    }

    movePossibilities(board){
        let actualRowIndex = this.r;
        let actualColumnIndex = this.c;
        let possibleMoves = []

        //up move
        if(actualRowIndex != 0){
            for(let i = actualRowIndex-1; i >= 0; i--){
                let square = board[i][actualColumnIndex];
                if(this.hasPiece(square)){
                    if(this.canKill(square)){
                        possibleMoves.push({r: i, c: actualColumnIndex, kill: true});
                        break;
                    }
                    break;
                }
                else{
                    possibleMoves.push({r: i, c: actualColumnIndex, kill: false});
                }
            }
        }

        //down move
        if(actualRowIndex != board.length){
            for(let i = actualRowIndex+1; i < board.length; i++){
                let square = board[i][actualColumnIndex];
                if(this.hasPiece(square)){
                    if(this.canKill(square)){
                        possibleMoves.push({r: i, c: actualColumnIndex, kill: true});
                        break;
                    }
                    break;
                }
                else{
                    possibleMoves.push({r: i, c: actualColumnIndex, kill: false});
                }
            }
        }

        //left move
        if(actualColumnIndex != 0){
            for(let i = actualColumnIndex-1; i >= 0; i--){
                let square = board[actualRowIndex][i];
                if(this.hasPiece(square)){
                    if(this.canKill(square)){
                        possibleMoves.push({r: actualRowIndex, c: i, kill: true});
                        break;
                    }
                    break;
                }
                else{
                    possibleMoves.push({r: actualRowIndex, c: i, kill: false});
                }
            }
        }

        //right move
        if(actualColumnIndex != board.length){
            for(let i = actualColumnIndex+1; i < board.length; i++){
                let square = board[actualRowIndex][i];
                if(this.hasPiece(square)){
                    if(this.canKill(square)){
                        possibleMoves.push({r: actualRowIndex, c: i, kill: true});
                        break;
                    }
                    break;
                }
                else{
                    possibleMoves.push({r: actualRowIndex, c: i, kill: false});
                }
            }
        }

        return possibleMoves;
    }
}