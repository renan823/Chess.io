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
    const render = new Render(ctx, canvas);
    render.draw(board);

    
    //Detect clicks
    canvas.addEventListener('click', (e)=>{
        board = move(board, canvas, e);
        render.draw(board);
    })

}


        