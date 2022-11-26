window.onload = ()=>{
    //Create board
    const boardObject = new Board();
    let board = boardObject.create();
    board = init(board);

    //Set up canvas
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 800;

    //Draw the board
    drawBoard(ctx, board);

    //Test
    //board[2][1].piece = new Pawn(2, 1, "white", -1, -1);
    //console.log(board)
    //console.log(board[1][0].piece.movePossibilities(board));
    board[3][3].piece = new Rook(3, 3, "white");

    console.log(board[3][3].piece.movePossibilities(board));

    const round = "white";
}




const drawBoard = (ctx, board)=>{
    for(let r = 0; r < 8; r++){
        for(let c = 0; c < 8; c++){
            let square = board[r][c];
            ctx.fillStyle = square.color;
            ctx.fillRect(square.x, square.y, square.w, square.h);
            ctx.fill();
        }
    }
}


        
