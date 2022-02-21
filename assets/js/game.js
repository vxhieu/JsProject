class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();

    }
    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.body.appendChild(this.canvas);
        // creat bullet ball
        this.bulletBall = new bulletBall(this);
    }
    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(),20);
       
    } 
    update() {
        this.bulletBall.update();
    }
    draw() {
        this.bulletBall.draw();
    }
}
var g = new game();