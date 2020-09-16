
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ground,paper, dustbin;


function setup() {
	createCanvas(1600, 700);

    
	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(800,680,1600,20);
	paper=new Paper(200,450,40);
	dustbin= new Dustbin(1200,650);
	//Create the Bodies Here.
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
    
  	}

}


