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

    //Set up render
    const render = new Render(ctx, canvas)
    render.draw(board)

    //Round variable
    const round = {
        color: "white",
        clicks: 0,
        possibleMoves: [],
        actualPosition: {r: null, c: null},
        oldSquare: null
    };


    //Detect clicks
    canvas.addEventListener('click', (e)=>{
        let x = e.clientX - canvas.offsetLeft + scrollX;
        let y = e.clientY - canvas.offsetTop + scrollY;
        let square = getSquare(x, y, board);
        if(round.clicks === 0){
            if(square.piece !== null){
                if(round.color === square.piece.color){
                    round.possibleMoves = board[square.r][square.c].piece.movePossibilities(board);
                    console.log(round.possibleMoves);
                    round.oldSquare = square;
                    round.actualPosition.r = square.r;
                    round.actualPosition.c = square.c;
                    round.clicks++;
                }
            }
        }
        else{
            if(round.possibleMoves.length === 0){
                round.clicks = 0;
            }
            else{
                for(let i = 0; i < round.possibleMoves.length; i++){
                    let item = round.possibleMoves[i];
                    if(item.c === square.c && item.r === square.r){
    
                        let piece = board[round.actualPosition.r][round.actualPosition.c].piece;
                        piece.totalMoves++;
                        board[square.r][square.c].piece = piece;
                        board[square.r][square.c].piece.r = square.r;
                        board[square.r][square.c].piece.c = square.c;
                        board[round.actualPosition.r][round.actualPosition.c].piece = null;
    
                        render.draw(board);
    
                        round.clicks = 0;
                        round.possibleMoves = [];
                        round.oldSquare = null;
                        if(round.color === "white"){
                            round.color = "black";
                        }
                        else{
                            round.color = "white"
                        }
                    }
                }
            }
        }
    })
}

//Find a square in board with position (x, y)
const getSquare = (x, y, board)=>{
    for(let r = 0; r < board.length; r++){
        let row = board[r];
        if(getSquarePositionY(row[0], y)){
            for(let c = 0; c < row.length; c++){
                if(getSquarePositionX(row[c], x)){
                    return(row[c]);
                }
            }
        }
    }
}

const getSquarePositionY = (square, y)=>{
    return (((square.h + square.y) > y) && (square.y < y))
}

const getSquarePositionX = (square, x)=>{
    return (((square.w + square.x) > x) && (square.x < x))
}


        