class bulletBall {
    constructor(game){
        this.game = game;
        this.image= null;
        this.ImageLoaded = false;
        this.x = BULLET_BALL_START_X;
        this.y = BULLET_BALL_START_Y; 
        this.color = this.getRandomColor();
        this.loadImage()
    }
    update() {
    }
    loadImage() {
        this.image = new Image;
        this.image.onload = () => {
            this.ImageLoaded = true;
        }
        this.image.src ='../../assets/img/'+this.color+'.png';
    }
    draw() {
        if (!this.ImageLoaded ) {
            return;
        }
        this.game.context.drawImage(this.image,this.x-BALL_RADIUS,thi.y-BALL_RADIUS);
      
    }
    getRandomColor(){
        let colors = ['red','blue','green'];
        let r = Math.round(Math.random()*2);
        return colors[r];
    
    }
    
}