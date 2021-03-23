//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var roof;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.	
	bob1 = new Bob(255,150);//the bobs must be placed with distance btw them as diameter of the bob
	bob2 = new Bob(255+60,150);
	bob3 = new Bob(255+120,150);
	bob4 = new Bob(255+180, 150)
	bob5 = new Bob(255+240,150);

	roof = new Roof(400,155,500,50);

	rope1 = new Rope(bob1.body, {x: 255, y: 150});
	rope2 = new Rope(bob2.body, {x: 255+60, y: 150});
	rope3 = new Rope(bob3.body, {x: 255+120, y: 150}); 
	rope4 = new Rope(bob4.body, {x: 255+180, y: 150});
	rope5 = new Rope(bob5.body, {x: 255+240, y: 150});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //display objects
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  push();
		stroke("white");
		strokeWeight(3);
		fill("black");
		rectMode(CENTER);
		rect(400, 60, 432, 103);
		textAlign(CENTER);
		textSize(25);
		text("NEWTON'S CRADLE", 400, 65)
		rect(400, 615, 420,100);
		textSize(15);
		strokeWeight(0);
		fill("white");
		text("Press Left arrow to pull the BOB up", 400,595)
		text("Press any key to release the BOB", 400, 615);
  pop();

  drawSprites();
  keyEvents();
}

function keyEvents() {
	if (keyCode === UP_ARROW && Matter) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -10, y: -11})
	}
	
}


