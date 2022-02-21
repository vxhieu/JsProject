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
            this.bulletBall = new bulletBall(this.game);
             // creat arrow
            this.arrow = new arrow(this);
            this.listenMouseEvent();
    
        }
        getMousePossition(event) {
            var rect = this.canvas.getBoundingClientRect();
            return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
            };
        }
        listenMouseEvent() {
            this.canvas.addEventListener('mousemove',(event) => {
                let mousePos = this.getMousePossition(event);
                // vẽ mũi tên arrow
            });
           addEventListener('click',(event) => {
                
            }); 
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
            this.arrow.draw();
        }
    }
var g = new game();