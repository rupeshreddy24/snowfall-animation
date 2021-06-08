const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,ground,gimg;
var boy,boyImg;
var ice=[];
var maxSnow=100;

function preload(){
  bg=loadImage("snow2.jpg");
  gimg=loadImage("ground.PNG");
  boyImg = loadImage("cb.png");
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  


ground=createSprite(650,670);
ground.addImage(gimg);
ground.scale=3.2;
ground.velocityX=-10;

boy=createSprite(150,480);
boy.addAnimation("boy",boyImg)
boy.scale=0.4;
boy.velocityX=2;
boy.setCollider("rectangle",15, -20,100,180) 

if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine);

  boy.collide(ground);

  if(ground.x < 530){
    ground.x=600;
  }

  if(boy.x > 1200){
    boy.x=150;
  }

  if(keyWentDown("space")&& boy.y >= 100) {
    boy.velocityY = -12;
}

//add gravity
boy.velocityY = boy.velocityY + 0.8

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
    


ground.display();

  
  drawSprites();

}