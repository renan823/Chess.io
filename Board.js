class Board{
    constructor(){};

    create(){
        const board = [];

        //External for -> rows
        //Internal for -> columns
        
        for(let r = 0; r < 8; r++){
            let row = []
            for(let c = 0; c < 8; c++){

                let square = {
                    r: r,
                    c: c,
                    color: 'black',
                    piece: null,
                    x: r*100,
                    y: c*100,
                    w: 100,
                    h: 100
                };

                if((r+1) % 2 !== 0){
                    if((c+1) % 2 === 0){
                        square.color = 'white';
                    }
                }
                else{
                    if((c+1) % 2 !== 0){
                        square.color = 'white';
                    }
                }
                row.push(square);
            }
            board.push(row)
        }
        return board;
    }
}