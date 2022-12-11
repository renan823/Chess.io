class King extends Piece{
    constructor(r, c, color){
        super(r, c, color, "king", 0);
        this.image = this.getImage("King");
    }
}