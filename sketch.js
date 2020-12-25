
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trashbin1,trashbin2,trashbin3,dustbinImage;
var groundd;
var paperr;

function preload()
{
dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	groundd = new ground(450,580,900,15);
	trashbin1 = new peice(650,565,200,17);
	trashbin2 = new peice(750,470,17,200);
	trashbin3 = new peice(550,470,17,200);
	paperr = new paper(40,560,20);
	

  
}


function draw() {
  rectMode(CENTER);
  background("black");

  


 
 
  
  


 
  trashbin1.display();
  trashbin2.display();
  trashbin3.display();
  paperr.display();
 groundd.display();
  
 imageMode(CENTER);  
 image(dustbinImage,650,470,210,210);
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperr.body,paperr.body.position,{x:35,y:-35});
	}
}




