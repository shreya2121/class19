var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);


  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost= createSprite(200,200,50,50);
  ghost.scale=0.5;
  ghost.addImage("ghost",ghostImg);

  doorsGroup=new Group();
  climbersGroup=new Group();

  
}

function draw() {
  background(200);

if(gameState==="play"){




  if(keyDown("space")){
    ghost.velocityY = -2;

  }

  ghost.velocityY=ghost.velocityY+0.8;

  if(keyDown("right_arrow")){
    ghost.x +=2;
  }

  if(keyDown("left_arrow")){
    ghost.x -=2;
  }
  
  if(tower.y > 400){
      tower.y = 300
    }

if(climbersGroup.isTouching(ghost)){
  ghost.destroy();
  gameState="end";

}





SpawnDoors();
    drawSprites();

  }
  if(gameState==="end"){
    stroke("yellow");
    fill ("red");
    textSize(35);
    text("Game Over",230,250);
  
  }

}


function SpawnDoors(){
if (frameCount%240===0){
  var door= createSprite(200,-50);
  var climber= createSprite(200,10);
  door.x=Math.round(random(120,400));
  climber.x=door.x;
  door.addImage(doorImg);
  climber.addImage(climberImg);
  door.velocityY= 1;
  climber.velocityY=1;
  door.lifetime=800;
  climber.lifetime=800;
  ghost.depth=door.depth;
  ghost.depth+=1;

  doorsGroup.add(door);
  climbersGroup.add(climber);

}

}