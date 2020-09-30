var Saransh = [12,null,true,"String",'2',[1,2,3,4,5,6],["a","b","c"]];
console.log(Saransh[5][2]);
Saransh.push("Mittal");
console.log(Saransh);
Saransh.pop();
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,box,world,ground,bird,log1,log2,log3,log4,pig1,box2,box3,pig2,slingshot,box4;
var bgimg,ground2;

function preload(){
bgimg = loadImage("sprites/bg.png");
}
function setup(){
var canvas=createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
ground=new Ground(600,395,1400,10);
box = new Box(700,320,80,80);
box1 = new Box(920,320,80,80);
box2 = new Box(700,230,80,80);
box3 = new Box(920,230,80,80);
bird = new Bird(230,33,50);
log1 = new Log(810,240,300,PI/2);
log2 = new Log(810,180,300,PI/2);
log3 = new Log(760,120,150,PI/7);
log4 = new Log(870,120,150,-PI/7);
box4 = new Box(810,150,70,70); 
pig1=new Pig(810,240);
pig2 = new Pig(810,350);
slingshot = new SlingShot(bird.body,{x:230,y:33});
ground2  = new Ground(100,320,300,250);

}
function draw(){ 
background(bgimg);
Engine.update(engine);
pig1.body.position.y = 258;
console.log(pig1.body.position.y);
strokeWeight(5);
ground.display();
box.display();
box1.display();
box2.display();
box3.display();
bird.display();
log1.display();
log2.display();
log3.display();
log4.display();
box4.display();
ground2.display();

pig1.display();
pig2.display();

slingshot.display();

}
function mouseDragged(){
  
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
slingshot.fly();
}
function keyPressed(){
  if (keyCode === 32){
    slingshot.attach(bird.body);
  }
}