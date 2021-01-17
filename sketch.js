
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var mConstraint;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/1.5);
 engine = Engine.create();
	world = engine.world;

let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
  mouse: canvasmouse 
};

mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint);

	//Create the Bodies Here.

bobObject1 = new Pendulum(340,450,"#00b0ff");
bobObject2 = new Pendulum(400,450,"#e91e63");
bobObject3 = new Pendulum(460,450,"#ffc107");
bobObject4 = new Pendulum(520,450,"#e91e63");
bobObject5 = new Pendulum(580,450,"#00b0ff");

sling1 = new Sling(bobObject1.body,{x:340,y:200})
sling2 = new Sling(bobObject2.body,{x:400,y:200})
sling3 = new Sling(bobObject3.body,{x:460,y:200})
sling4 = new Sling(bobObject4.body,{x:520,y:200})  
sling5 = new Sling(bobObject5.body,{x:580,y:200})
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}

function mouseDragged(){
  Matter.Body.setPosition(bobObject1.body,{x: mouseX,y: mouseY});
}
