const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var Barrier1;
var Barrier2;
var Barrier3;
var Barrier4;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;



function setup() {
  createCanvas(480, 745);

  engine = Engine.create();
  world = engine.world;

  //bodies built below
  Barrier1 = new Ground(240, 742.5, 480, 5, "coral");
  Barrier2 = new Ground(477.5, 372.5, 5, 745, "coral");
  Barrier3 = new Ground(240, 2.5, 480, 5, "coral");
  Barrier4 = new Ground(2.5, 372.5, 5, 745, "coral");
  ground = new Ground(240, 735, 470, 10, "white");
  for (var k = 0;k <= width; k = k + 80){
    divisions.push(new Division(k, height - (divisionHeight/2), 10, divisionHeight));
  }
  for (var j = 40;j <= width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j = 15;j <= width - 10; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40;j <= width; j = j+50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j = 15;j <= width - 10; j = j+50){
    plinkos.push(new Plinko(j, 375));
  }
  
}
function draw(){
  background(0);
  Engine.update(engine);
  //display bodies below
  Barrier1.display();
  Barrier2.display();
  Barrier3.display();
  Barrier4.display();
  ground.display();

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10));
  }

  for(var j = 0;j < plinkos.length; j++ ){
    plinkos[j].display();
  }
  for(var k = 0;k < divisions.length; k++ ){
    divisions[k].display();
  }
  for(var l = 0;l < particles.length; l++ ){
    particles[l].display();
  }
  
  drawSprites();
}