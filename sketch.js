const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rand;
var drops=[];
var thunder,thunderCreateFrame;

maxDrops=100;

function preload() {
    thunder1=loadImage("proc41images/images/thunderbolt/1.png");

    thunder2=loadImage("proc41images/images/thunderbolt/2.png");

    thunder3=loadImage("proc41images/images/thunderbolt/3.png");

    thunder4=loadImage("proc41images/images/thunderbolt/4.png");

}

function setup(){
    createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

   if(frameCount%150===0){
       for(var i=0; i<maxDrops;i++){
           drops.push(new Rainfall(random(0,400),random(0,400)));
       }
   }
    umbrella=new Umbrella(170,470);
    }

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    var rand =Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreateFrame=frameCount;
        thunder=createSprite(random(10,370),random(10,30),10,10);
        
        switch(rand){
            case 1:thunder.addImage(thunder1);
                 break;
            case 2:thunder.addImage(thunder2);
                 break;
            case 3:thunder.addImage(thunder3);
                 break;
            case 4:thunder.addImage(thunder4);     
            default: break;
        }
        
        thunder.scale=random(0.3,0.6);
        
    }
    
      for (var i = 0; i < maxDrops; i++) {
       drops[i].display();
       drops[i].updateY();
     }

     umbrella.display();
     if(thunderCreateFrame + 10===frameCount && thunder){
            thunder.destroy();
        } 
     drawSprites();

}

  

