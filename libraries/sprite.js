class Sprite {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fillRect(this.x+1, this.y+1, this.w-2, this.h-2);
    }
}