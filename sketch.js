var boy
var Path

var runner
var path

function preload(){
    
  //running animation
    boy = loadAnimation("Runner-1.png", "Runner-2.png");

  //path
    Path = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);



  //creating path
  path = createSprite(200,200,400,400);
  path.addImage(Path);
  path.scale = 1.2;
  path.velocityY = 5;

  //runner
runner = createSprite(200,200,10,10);
runner.addAnimation("running", boy);
runner.scale = 0.05;
  

  //borders
  leftBorder = createSprite(0,0,100,1000);
  leftBorder.visible = false;
  rightBorder = createSprite(400,0,100,1000);
  rightBorder.visible = false;

  edges = createEdgeSprites();

}

function draw() {
  background(0);

  path.velocityY = 5;
  

  runner.x = World.mouseX; 
  runner.collide(edges[3]);
  runner.collide(leftBorder);
  runner.collide(rightBorder);

  if(path.y > 400){
    path.y = height/2;
  }

  drawSprites();
}
