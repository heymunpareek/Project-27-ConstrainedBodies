class Roof {
    constructor(x,y,w,h) {
        var roofop={
            isStatic: true
        }

        //this.body
        this.body = Bodies.rectangle(x, y, w, h, roofop);
        this.w = w;
        this.h = h;

        //add this.body to world
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        
        push()
        translate(pos.x, pos.y);
        fill("white");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}