class ball{
    constructor(game,row,col){
        this.game =game;
        this.x =0;
        this.y=0;
        
        this.image =null;
        this.isImageLoaded =false;

        this.color = this.getRandomColor;
        this.loadImage();
    }
    getRandomColor() {
        let colors = ['blue', 'red', 'green'];
        let r = Math.round(Math.random() * 2);
        return colors[r];
    }
    loadImage() {
        this.image = new Image;
        this.image.onload = () => {
            this.isImageLoaded = true;
        }
        this.image.src = '/img/' + this.color + '.png';
    }
    update() {
       
    
    }
    draw() {
        if (!this.isImageLoaded) {
            return;
        }
        this.game.context.drawImage(
            this.image,
            this.x - BALL_RADIUS,
            this.y - BALL_RADIUS
        );

    }
}