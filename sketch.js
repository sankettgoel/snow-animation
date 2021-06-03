const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,snowflakes;
//var backgroundImage, bgImage= "snow1.png";


function setup()
{
  createCanvas(1500,800);
  engine= Engine.create();
  world= engine.world;

  ground= new Ground(750,790,1500,20);

  snowflakes= new Snow(750,800,10,10)

  
}

function draw()
{
  //backgroundImage= loadImage(bgImage);
  Engine.update(engine);

  ground.display();
  snowflakes.display();

}