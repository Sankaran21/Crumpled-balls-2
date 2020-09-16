class Paper{
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.r=radius;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x, y, this.r/2, options);
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    }
        display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            strokeWeight(3);
            fill("red");
            ellipseMode(CENTER);
            image(this.image,0,this.radius=70);
            pop();
          }
    }