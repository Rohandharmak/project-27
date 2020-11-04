
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var BobObj1,BobObj2,BobObj3,BobObj4,Bobobj5;
var rope1,rope2,rop3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  BobObj1=new Bob(400,400);
  BobObj2=new Bob(430,400);
  BobObj3=new Bob(460,400);
  BobObj4=new Bob(490,400);
  BobObj5=new Bob(520,400);

  rope1=new Chain(BobObj1.body,roofobject.body,-BobDiameter*2,0);
  rope2=new Chain(BobObj2.body,roofobject.body,-BobDiameter*2,0);
  rope3=new Chain(BobObj3.body,roofobject.body,-BobDiameter*2,0);
  rope4=new Chain(BobObj4.body,roofobject.body,-BobDiameter*2,0);
  rope5=new Chain(BobObj5.body,roofobject.body,-BobDiameter*2,0);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  BobObj1.display();
  BobObj2.display();
  BobObj3.display();
  BobObj4.display();
  BobObj5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  if(keyPressedOver===UP_ARROW){
    Matter.Body.applyForce(BobObj1.body,BobObj1.body.position,{x:85,y:-85})
    }

}



