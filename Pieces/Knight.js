class Knight extends Piece{
    constructor(r, c, color){
        super(r, c, color, "knight", 0);
        this.image = this.getImage("Knight");
    }

    movePossibilities(board){
        let actualRowIndex = this.r;
        let actualColumnIndex = this.c;
        let possibleMoves = []

        //Up moves
        if(actualRowIndex-2 >= 0){

            let newRow = actualRowIndex-2;
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
            if(newColumnRight <= board.length){
                let result = this.move(newRow, newColumnRight, board);
                if(result){
                    possibleMoves.push(result);
                }
            }
        }

        //Down moves
        if(actualRowIndex+2 <= board.length){
            
            let newRow = actualRowIndex+2;
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
            if(newColumnRight <= board.length){
                let result = this.move(newRow, newColumnRight, board);
                if(result){
                    possibleMoves.push(result);
                }
            }
        }

        //downRigth move
        if(actualRowIndex != board.length && actualColumnIndex != 0){
            
            
        }

        //downLeft move
        if(actualRowIndex != board.length && actualColumnIndex != board.length){
            
        }

        return possibleMoves;
    }
}