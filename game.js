class game{
    constructor(){
            this.canvas = null; 
            this.context = null;
            this.init();
            this.loop();
    }
    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.body.appendChild(this.canvas);
        // create grid
        // this.grid = new grid(this);
        // create BulletBall
        this.bulletBall = new bulletBall(this);
        // create arrow
        // this.arrow = new arrow(this);
    
        // lister mouse even
        this.listenMouseEvent();
    }
    getMousePossition(event) {
       var rect = this.canvas.getBoundingClientRect();
       return {
           x : event.clientX -rect.left,
           y : event.clientY - rect.top
       };
    }
    listenMouseEvent() {
        this.canvas.addEventListener('mousemove',(event) => {
            let mousePos = this.getMousePossition(event);
            
        });
            // vẽ mũi tên arrow
        this.canvas.addEventListener('click',(event) => {
            let mousePos = this.getMousePossition(event);
            this.bulletBall.fire(mousePos);
        });
    }
    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(),20);
    }
    update() {
        this.bulletBall.update();
        // this.arrow.update();
    }
    draw() {
        // this.arrow.draw();
        this.bulletBall.draw();
       
       
    }
 
}
var g = new game();
