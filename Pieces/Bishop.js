class Bishop extends Piece{
    constructor(r, c, color){
        super(r, c, color, "bishop", 0);
        this.image = this.getImage("Bishop");
    }

    canMove(board, i, j){
        let square = board[i][j];
        if(this.hasPiece(square)){
            if(this.canKill(square)){
                return({r: i, c: j, kill: true});
            }
            return;
        }
        else{
            return({r: i, c: j, kill: false});
        }
    }


    movePossibilities(board){
        let actualRowIndex = this.r;
        let actualColumnIndex = this.c;
        let possibleMoves = []

        //upRight move
        if(actualRowIndex > 0 && actualColumnIndex < board.length-1){
            let nextColumn = actualColumnIndex+1;

            for(let r = actualRowIndex-1; r >= 0; r--){
                if(nextColumn < board.length){
                    let result = this.canMove(board, r, nextColumn);
                    if(result){
                        possibleMoves.push(result);
                        if(result.kill){
                            break;
                        }
                    }
                    else{
                        break;
                    }
                    nextColumn++;
                }
            }
        }

        //upLeft move
        if(actualRowIndex > 0 && actualColumnIndex > 0){
            let nextColumn = actualColumnIndex-1;
                
            for(let r = actualRowIndex-1; r >= 0; r--){
                if(nextColumn >= 0){
                    let result = this.canMove(board, r, nextColumn);
                    if(result){
                        possibleMoves.push(result);
                        if(result.kill){
                            break;
                        }
                    }
                    else{
                        break;
                    }
                    nextColumn--;
                }
            }
        }

        //downRight move
        if(actualRowIndex < board.length && actualColumnIndex < board.length-1){
            let nextColumn = actualColumnIndex+1;

            for(let r = actualRowIndex+1; r <= board.length-1; r++){
                if(nextColumn < board.length){
                    let result = this.canMove(board, r, nextColumn);
                    if(result){
                        possibleMoves.push(result);
                        if(result.kill){
                            break;
                        }
                    }
                    else{
                        break;
                    }
                    nextColumn++;
                }
            }
        }

        //dowLeft move
        if(actualRowIndex < board.length && actualColumnIndex > 0){
            let nextColumn = actualColumnIndex-1;

            for(let r = actualRowIndex+1; r <= board.length-1; r++){
                if(nextColumn >= 0){
                    let result = this.canMove(board, r, nextColumn);
                    if(result){
                        possibleMoves.push(result);
                        if(result.kill){
                            break;
                        }
                    }
                    else{
                        break;
                    }
                    nextColumn--;
                }
            }
        }

        return possibleMoves;
    }
}