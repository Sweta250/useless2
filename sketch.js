const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  //myworld is myengine's world
  myworld =myengine.world;

  /*var prop={
  restitution: 1.0
}*/

ground =Bodies.rectangle(200,200,400,20,{isStatic: true});
World.add(myworld,ground);



ball=Bodies.circle(100,100,20,{restitution: 1.0});
World.add(myworld,ball);


  
}

function draw() {
  background("pink"); 
  Engine.update(myengine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,20);
  //drawSprites();
}