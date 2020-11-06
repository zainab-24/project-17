
var monkey ,monkeyImage;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime=0;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600); 

monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);  
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);  
  
bananaGroup=new Group();
obstacleGroup=new Group();
}


function draw() {
background("pink");

if(ground.x<0){
ground.x=ground.width/2;
  }
  
spawnbanana(); 
spawnobstacle();  
  
if(keyDown("space")){
 monkey.velocityY=-10;
 
}
 monkey.velocityY=monkey.velocityY+0.5; 
 monkey.collide(ground); 
  
  


stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate());
text("survival Time:"+survivalTime,100,50);

  

drawSprites();
}


function spawnbanana () {  
if(frameCount%80==0) {
banana=createSprite(200,200,20,20);  
banana.addImage("banana",bananaImage);
banana.scale=0.1
 banana.velocityX=-2; 
 banana.lifetime=150; 
var ran=Math.round(random(120,200));
} 
}
function spawnobstacle(){
if(frameCount%300==0){
 obstacle=createSprite(350,330,20,20);
  obstacle.addImage("obstace",obstaceImage);
  obstacle.velocityX=-2
  obstacle.scale=0.1;
  obstacle.lifetime=60;
  var ren=Math.round(random(1,3));
}  
}



