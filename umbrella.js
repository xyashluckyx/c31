class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true,
        }
        this.body = Bodies.circle(x, y,150,options);
        this.radius=150;
        this.image=loadImage("proc41images/images/Walking Frame/walking_1.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image ,0, 0, this.radius*2,this.radius*2);
        pop();
    }
}