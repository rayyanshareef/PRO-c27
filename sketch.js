
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pendulum1,pendulum2,pendulum3;
var pendulum4,pendulum5;

var chain1,chain2,chain3,chain4,chain5;
var background,colour;

function preload()
{
	background = colour("black");
}

function setup() {
	//createCanvas(800, 700);
	canvas=createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse=Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  let options=
  {
    mouse: canvasmouse
  }
  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  pendulum1=new Pendulum(200,380,"black");
  pendulum2=new Pendulum(280,380,"black");
  pendulum3=new Pendulum(360,380,"black");
  pendulum4=new Pendulum(440,380,"black");
  pendulum5=new Pendulum(520,380,"black");

  chain1=new Sling(pendulum1.body,{x:200,y:130});
  chain2=new Sling(pendulum2.body,{x:280,y:130});
  chain3=new Sling(pendulum3.body,{x:360,y:130});
  chain4=new Sling(pendulum4.body,{x:440,y:130});
  chain5=new Sling(pendulum5.body,{x:520,y:130});


}

function draw() {
  background("black");  

  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprite();
}

	
  



function mouseDragged(){
	matter.body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}



