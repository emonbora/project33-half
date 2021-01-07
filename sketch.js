const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var particles=[];
var plinko=[];
var divisions=[];
var divisionHeight = 300;
var score = 0
var particles;
var turn = 0;


function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for (var k = 0; k <=width; k = k + 80) { 
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); 
  }
  for (var j = 75; j <=width; j=j+50) 
  { plinko.push(new Plinko(j,75)); 
  }
  for (var j = 50; j <=width-10; j=j+50) 
  { plinko.push(new Plinko(j,175)); 
  }
  for (var j = 75; j <=width; j=j+50) { 
    plinko.push(new Plinko(j,275)); 
  } 
  for (var j = 50; j <=width-10; j=j+50) 
  { plinko.push(new Plinko(j,375)); 
  }
}

function draw() {
  background("black");
  ground.display();
  for(var k = 0; k<divisions.length; k++){
    divisions[k].display()
  }

for (var i = 0; i < plinko.length; i++) {
   plinko[i].display(); 
  }
  if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
    }
  
for (var j = 0; j < particles.length; j++) { 
  particles[j].display(); 
}
  drawSprites();
  Engine.update(engine)

}

function mousePressed(){
  if(gameState !=="end"){
    count++;
    particles = new Particle(mouseX,10,10,10)
    if(particles !== null){
      particles.display();
      if (particles.body.position.y>760){
         if(particles.body.position.x<300){
           score = score+500
           particle = null
           if(count=>5)gameState = "end"
         }
      }
    }
  }
}