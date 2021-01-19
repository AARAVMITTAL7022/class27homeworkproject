
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1= new Bob(300,500);
	bobObject2= new Bob(370,500);
	bobObject3= new Bob(440,500);
	bobObject4= new Bob(510,500);
	bobObject5= new Bob(580,500);

    roof= new Roof(440,100,500,50);

    rope1=new Rope(bobObject1.body,roof.body,-138,2);
    rope2=new Rope(bobObject2.body,roof.body,-68,4);
    rope3=new Rope(bobObject3.body,roof.body,6,6);
    rope4=new Rope(bobObject4.body,roof.body,78,8);
    rope5=new Rope(bobObject5.body,roof.body,148,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(270);
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}




