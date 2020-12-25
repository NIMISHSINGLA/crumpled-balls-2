class paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.5,
            density:0.6,
            friction:0.5
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        this.image = loadImage("paperrr.png");
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
       
        push();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius*2,this.radius*2);
        
        
        
    }
}