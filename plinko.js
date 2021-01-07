class Plinko{
    constructor(x,y,r){
        var options = {
            restitution:0.4,
            friction:0,
            isStatic:true
        }
        this.r=10;
        this.x=x;
        this.y=y
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate (angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,this.r,this.r);
        pop(); 

    }
}