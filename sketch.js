var path ;
var Runner; 
Runner_running;
var bomb; var coin; 

function preload(){
  //pre-load images
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
  coinImg = loadImage("coin.png");
}

function setup(){
  //Moving background
  createCanvas(1900,1000);
    path = createSprite(1000,500);
    path.addImage(pathImg);
    path.velocityY =-4;
    path.scale =1.2;

  //create sprites here
 Runner = createSprite(1000,800,20,20);
Runner.addAnimation("running",Runner_running);
 Runner.scale=0.1;;

 invisibleboundary = createSprite(1200,500,10,1000);
 invisibleboundary.visible = false;

 invisibleboundary2= createSprite(800,500,10,1000);
 invisibleboundary2.visible = false;

coin = createSprite(900,700,20,20);
coin.addImage(coinImg);
coin.scale=0.4;
 
coin = createSprite(1000,700,20,20);
coin.addImage(coinImg);
coin.scale=0.4;

coin = createSprite(1100,700,20,20);
coin.addImage(coinImg);
coin.scale=0.4;

 
coin = createSprite(900,400,20,20);
coin.addImage(coinImg);
coin.scale=0.4;

 
coin = createSprite(1000,400,20,20);
coin.addImage(coinImg);
coin.scale=0.4;

 
coin = createSprite(1100,400,20,20);
coin.addImage(coinImg);
coin.scale=0.4;

coin = createSprite(1000,200,20,20);
coin.addImage(coinImg);
coin.scale=0.4;

coin = createSprite(1000,550,20,20);
coin.addImage(coinImg);
coin.scale=0.4;

}

function draw() {
  background("white");

  textSize(20);
  text("CoinScore",700,900);
  textSize(20);
  text("0",800,900);
  Runner.x= World.mouseX;
  //code to reset the background
  if(path.y<400){
    path.y = height/2;
 
  }

  //code to reset the coin
  if(coin.y<400){
    coin.y = height/2;
  
  Runner.collide(invisibleboundary);
   Runner.collide(invisibleboundary2);
  }

  if(Runner.isTouching(coin)){
    CoinScore = CoinScore + 1;
  }
    drawSprites();
  }


  
  


