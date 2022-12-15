class Knight extends Piece{
    constructor(r, c, color){
        super(r, c, color, "knight", 0);
        this.image = this.getImage("Knight");
    }

    canMoveUpDown(board, possibleMoves, newRow, actualColumnIndex){
        let newColumnLeft = actualColumnIndex-1;
        let newColumnRight = actualColumnIndex+1;

        //left
        if(newColumnLeft >= 0){
            let result = this.move(newRow, newColumnLeft, board);
            if(result){
                possibleMoves.push(result);
            }
        }

        //right
        if(newColumnRight < board.length){
            let result = this.move(newRow, newColumnRight, board);
            if(result){
                possibleMoves.push(result);
            }
        }

        return possibleMoves;
    }

    canMoveRightLeft(board, possibleMoves, newColumn, actualRowIndex){
        let newRowUp = actualRowIndex-1;
        let newRowDown = actualRowIndex+1;

        //up
        if(newRowUp >= 0){
            let result = this.move(newRowUp, newColumn, board);
            if(result){
                possibleMoves.push(result);
            }
        }

        //down
        if(newRowDown < board.length){
            let result = this.move(newRowDown, newColumn, board);
            if(result){
                possibleMoves.push(result);
            }
        }

        return possibleMoves;
    }

    movePossibilities(board){
        let actualRowIndex = this.r;
        let actualColumnIndex = this.c;
        let possibleMoves = []

        //Up moves
        if(actualRowIndex-2 >= 0){
            let newRow = actualRowIndex-2;
            possibleMoves = this.canMoveUpDown(board, possibleMoves, newRow, actualColumnIndex);
        }

        //Down moves
        if(actualRowIndex+2 < board.length){
            let newRow = actualRowIndex+2;
            possibleMoves = this.canMoveUpDown(board, possibleMoves, newRow, actualColumnIndex);
        }

        //Left moves
        if(actualColumnIndex-2 >= 0){
            let newColumn = actualColumnIndex-2;
            possibleMoves = this.canMoveRightLeft(board, possibleMoves, newColumn, actualRowIndex);
        }

        //Right moves
        if(actualColumnIndex+2 < board.length){
            let newColumn = actualColumnIndex+2;
            possibleMoves = this.canMoveRightLeft(board, possibleMoves, newColumn, actualRowIndex);
        }

        return possibleMoves;
    }
}