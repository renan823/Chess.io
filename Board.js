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
                    color: '#DFF5CE',
                    piece: null,
                    x: c*100,
                    y: r*100,
                    w: 100,
                    h: 100
                };

                if((r+1) % 2 !== 0){
                    if((c+1) % 2 === 0){
                        square.color = '#72CC50';
                    }
                }
                else{
                    if((c+1) % 2 !== 0){
                        square.color = '#72CC50';
                    }
                }
                row.push(square);
            }
            board.push(row)
        }
        return board;
    }
}