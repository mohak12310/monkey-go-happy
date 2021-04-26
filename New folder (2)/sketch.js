
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime
var background, backgroundImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImage=loadImage("jungle.jpg")
 
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
  createCanvas(670, 400);
  score=0
  survivalTime=0
  
  ground=createSprite(0,400,1500,10)
  
   background=createSprite(300,200,800,500)
  background.addImage(backgroundImage)
  
  
   monkey=createSprite(90,370,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
 
  

  }
function draw() {
 
  
  if(keyDown("space")&&monkey.y >= 300){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  
  ground.velocityX = -7 
ground.x = ground.width/2;
  
  background.velocityX = -7 
 background.x = background.width/2;
    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+2
    switch(score){
      case 1: monkey.scale=1
        break
        case 20:monkey.scale=0.12
        break
        case 30:monkey.scale=0.13
        break
        case 40:monkey.scale=0.14      
        break
    }
      }
    
    if(monkey.isTouching(obstacleGroup)){
      monkey.scale=0.1
      score=0
    }
  
 
 drawSprites()
  fill("white") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime=Math.round(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,350,50)
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-6
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}







