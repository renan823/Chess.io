class Render{
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.w = canvas.width;
        this.h = canvas.height;
    }

    clear(){
        this.ctx.clearRect(0, 0, this.w, this.h);
    }

    drawImage(square){
        let piece = square.piece;
        let image = new Image(60, 60);
        image.addEventListener('load', (e)=>{
            this.ctx.drawImage(image, parseInt(square.x)+20, parseInt(square.y)+20);
        })
        image.src = piece.image;
    }

    draw(board){
        this.clear();
        for(let r = 0; r < 8; r++){
            for(let c = 0; c < 8; c++){
                let square = board[r][c];
                this.ctx.fillStyle = square.color;
                this.ctx.fillRect(square.x, square.y, square.w, square.h);

                if(square.piece !== null){
                    this.drawImage(square);
                }

                this.ctx.fill();
            }
        }
    }
}