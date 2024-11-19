class Player extends Entity {
    constructor(x,y,w,h) {
        super(x,y,w,h);
    }

    movement() {
        if(keyIsDown("w")) {
            this.y -= 5;
        }
        
        if(keyIsDown("s")) {
            this.y += 5;
        }

        if(keyIsDown("a")) {
            this.x -= 5;
        }
        
        if(keyIsDown("d")) {
            this.x += 5;
        }
    }
}