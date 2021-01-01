const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var obstaclegroup;
var mario,ground;




function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  mario = new Mario(200,200,30,30);
  ground = new Ground(200,700,2000,5);
  obstaclegroup = new Group();

}

function draw() {
  background(200,255,255);  
  
  Engine.update(engine);
  







  spawnclouds();
  ground.display();

  mario.display();

  drawSprites();
}

function spawnclouds(){
  if(frameCount%100===0){
    obstacle = createSprite(2000,680,20,20);
    obstacle.scale = 0.7
    obstacle.velocityX = -4;

    obstaclegroup.add(obstacle);

    obstaclegroup.setLifetimeEach(-1);
 } 

}

function keyPressed(){
  if(keyCode(UP_ARROW)){
    mario.jump();
  }
}