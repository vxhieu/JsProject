class arrow {
    constructor(game) {
        this.game =game;
        this.mousePos = { x:0 , y:0};
    }
    update() {

    }
    draw() {
        this.game.context.beginPath();
        this.game.context.strokeStyle() ="#FF0000";
        this.game.context.moveTo(BULLET_BALL_START_X, BULLET_BALL_START_Y);
        this.game.context.lineTo(this.mousePos.x, this.mousePos.y);
        this.game.context.stroke();
    }
}