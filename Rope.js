class Rope {
    constructor(bodya, pointB) {
        var op={
            bodyA: bodya,
            pointB: pointB,
            stiffness: 0.4,
            length: 325
        }
        this.rope = Constraint.create(op);
        this.pointB = pointB;
        World.add(world, this.rope);
    }
    display() {
        var pb = this.pointB;
        var ba = this.rope.bodyA.position;
        push();
        stroke("red");
        strokeWeight(2);
        line(ba.x, ba.y, pb.x, pb.y);
        pop();
    }
}