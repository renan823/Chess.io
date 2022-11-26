class Bishop extends Piece{
    constructor(r, c, color){
        super(r, c, color, 7, 7, "bishop", 0);
    }

    movePossibilities(board){
        let actualRowIndex = this.r;
        let actualColumnIndex = this.c;
        let possibleMoves = []

        //upRight move
        if(actualRowIndex != 0 && actualColumnIndex != 0){
            let j = actualColumnIndex -1;
            for(let i = actualRowIndex-1; i >= 0; i--){
                if(j >= 0){
                    let square = board[i][j];
                    if(this.hasPiece(square)){
                        if(this.canKill(square)){
                            possibleMoves.push({r: i, c: j, kill: true});
                            break;
                        }
                        break;
                    }
                    else{
                        possibleMoves.push({r: i, c: j, kill: false});
                    }
                    j--;
                }
            }
        }

        //upLeft move
        if(actualRowIndex != 0 && actualColumnIndex != board.length){
            let j = actualColumnIndex +1;
            for(let i = actualRowIndex-1; i >= 0; i--){
                if(j < board.length){
                    let square = board[i][j];
                    if(this.hasPiece(square)){
                        if(this.canKill(square)){
                            possibleMoves.push({r: i, c: j, kill: true});
                            break;
                        }
                        break;
                    }
                    else{
                        possibleMoves.push({r: i, c: j, kill: false});
                    }
                    j++;
                }
            }
        }

        //downRigth move
        if(actualRowIndex != board.length && actualColumnIndex != 0){
            let j = actualColumnIndex -1;
            for(let i = actualRowIndex+1; i < board.length; i++){
                if(j >= 0){
                    let square = board[i][j];
                    if(this.hasPiece(square)){
                        if(this.canKill(square)){
                            possibleMoves.push({r: i, c: j, kill: true});
                            break;
                        }
                        break;
                    }
                    else{
                        possibleMoves.push({r: i, c: j, kill: false});
                    }
                    j--;
                }
            }
        }

        //downLeft move
        if(actualRowIndex != board.length && actualColumnIndex != board.length){
            let j = actualColumnIndex +1;
            for(let i = actualRowIndex+1; i < board.length; i++){
                if(j >= 0){
                    let square = board[i][j];
                    if(this.hasPiece(square)){
                        if(this.canKill(square)){
                            possibleMoves.push({r: i, c: j, kill: true});
                            break;
                        }
                        break;
                    }
                    else{
                        possibleMoves.push({r: i, c: j, kill: false});
                    }
                    j++;
                }
            }
        }

        return possibleMoves;
    }
}