class Ball{
    constructor(x, y, radius) {
        var options = {
            'frictionAir':0.00333333333333333333333,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, radius, options);
        this.radius= radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();
      }
}