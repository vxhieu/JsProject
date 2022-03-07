class grid {
    constructor(game) {
        this.game = game;
        this.y = 0;
        this.ball = [];
        this.createBalls();
    }
    createBalls() {

        for (let row = 0; row = 4; row++) {
            let rowBalls = []
            for (let col = 0; col < 10; col++) {
                let newBall = new ball(this.game, row, col);
                rowBalls.push(newBall);
            }
            this.ball.push(rowBalls);
        }

    }
    update() {

    }
    draw() {

    }
}