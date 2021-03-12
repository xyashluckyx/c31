class Rainfall{
    constructor(x,y) {
        var options = {
            'friction':0.1,
            'density':1.0
        }
        this.rain = Bodies.circle(x, y,6,options);
        this.radius=6;
        World.add(world, this.rain);
      }

      updateY(){
        if(this.rain.position.y>height){
          Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
          
        }
      }
      display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius); 
      }
    }
