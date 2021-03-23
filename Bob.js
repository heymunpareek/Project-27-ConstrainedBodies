class Bob {
    constructor(x,y) {
        var bobop={
            isStatic: false,
            restitution: 1,
            friction: 0.5,
            density: 1 
        }

        //this.body
        this.body = Bodies.circle(x,y,30,bobop); //circle in Matter.js accepts (x,y,radius)
        this.radius = 30;

        //add this.body in world
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        circle(0,0,this.radius*2);
        pop();

    }
}