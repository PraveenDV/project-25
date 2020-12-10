class PAPER{
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':1.0,
            'density':1.0,
            
        }

        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        this.image=loadImage("images/paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(RADIUS);
        fill("blue");
        image(this.image,0,0,this.diameter,this.diameter);       
        pop();
    }
};