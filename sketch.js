//creating variables
var backgroundImg, appleImg, basketImg, dirtImg, farmerImg;
var marketImg, moneyImg, seedsImg;

var market, seed, farmer, land1, land2, land3, land4, land5, land6, basket;

var plant1, plant2, plant3, plant4, plant5, plant6;

var stageImg1, stageImg2, stageImg3, stageImg4, stageImg5, stageImg6;

var seed1, seed2, seed3, seed4, seed5, seed6;

var positionX = 0;
var positionY = 0;

var dIsClicked = 0;
var pIsClicked = 0;

var moneyEarned = 180;
var seedBought = -1;

function preload() {
  //loading all the images 
  backgroundImg = loadImage("images/grass_15.png");
  appleImg = loadImage("images/apple.png");
  basketImg = loadImage("images/basket.png");
  dirtImg = loadImage("images/dirt.png");
  farmerImg = loadImage("images/farmer.png");
  marketImg = loadImage("images/market.png");
  moneyImg = loadImage("images/money.png");
  seedsImg = loadImage("images/seeds.png");
  stageImg1 = loadImage("images/seed.png");
  stageImg2 = loadImage("images/plant1.png");
  stageImg3 = loadImage("images/plant2.png");
  stageImg4 = loadImage("images/plant3.png");
  stageImg5 = loadImage("images/plant4.png");
  stageImg6 = loadImage("images/plant5.png");
}

function setup() {
  //creating canvas and making its width and height adjustable to the screen window size
  createCanvas(windowWidth, windowHeight);

  //creating a market sprite 
  market = createSprite(windowWidth-200, windowHeight-230);
  market.addImage(marketImg);

  //creating a seed sprite
  seedBag = createSprite(windowWidth-200, windowHeight/5);
  seedBag.addImage(seedsImg);
  seedBag.scale = 0.7;
  
  //creating a farmer sprite
  farmer = createSprite(windowWidth/4, windowHeight/2);
  farmer.addImage(farmerImg);
  farmer.scale = 2.5;
  
  //giving value to positionX and Y
  positionX = windowWidth/2-50;
  positionY = windowHeight/3;

  //creating land sprites
  land1 = new Land(positionX, positionY);
  land2 = new Land(positionX+200, positionY);
  land3 = new Land(positionX+400, positionY);
  land4 = new Land(positionX, positionY+150);
  land5 = new Land(positionX+200, positionY+150);
  land6 = new Land(positionX+400, positionY+150);

  //creating a basket sprite
  basket = createSprite(windowWidth/2+100, windowHeight/2+200);
  basket.addImage(basketImg);
  basket.scale = 0.5;
  
  //creating plant sprites and setting the image to be invisible
  plant1 = createSprite(positionX, positionY);
  plant1.addImage("dirt1",dirtImg);
  plant1.visible = false;

  plant2 = createSprite(positionX+200, positionY);
  plant2.addImage("dirt2",dirtImg);
  plant2.visible = false;

  plant3 = createSprite(positionX+400, positionY);
  plant3.addImage("dirt3",dirtImg);
  plant3.visible = false;

  plant4 = createSprite(positionX, positionY+150);
  plant4.addImage("dirt4",dirtImg);
  plant4.visible = false;

  plant5 = createSprite(positionX+200, positionY+150);
  plant5.addImage("dirt5",dirtImg);
  plant5.visible = false;

  plant6 = createSprite(positionX+400, positionY+150);
  plant6.addImage("dirt6",dirtImg);
  plant6.visible = false;

  seed1 = createSprite(positionX, positionY, 30, 30);
  seed1.addImage("seedling",stageImg1);
  seed1.scale = 0.3;
  seed1.visible = false;

  seed2 = createSprite(positionX+200, positionY, 30, 30);
  seed2.addImage("babyPlant",stageImg1);
  seed2.scale = 0.3;
  seed2.visible = false;

  seed3 = createSprite(positionX+400, positionY, 30, 30);
  seed3.addImage("seedling",stageImg1);
  seed3.scale = 0.3;
  seed3.visible = false;

  seed4 = createSprite(positionX, positionY+150, 30, 30);
  seed4.addImage("seedling",stageImg1);
  seed4.scale = 0.3;
  seed4.visible = false;

  seed5 = createSprite(positionX+200, positionY+150, 30, 30);
  seed5.addImage("seedling",stageImg1);
  seed5.scale = 0.3;
  seed5.visible = false;

  seed6 = createSprite(positionX+400, positionY+150, 30, 30);
  seed6.addImage("seedling",stageImg1);
  seed6.scale = 0.3;
  seed6.visible = false;

}

function draw() {
  //adding an image to the background
  background(backgroundImg);

  //making the farmer controleble using arrow keys
  //adding edges so the farmer doesn't go out of view
  if(keyIsDown(UP_ARROW) && farmer.y > height/4-80){
    farmer.y -= 5;
  }

  if(keyIsDown(DOWN_ARROW) && farmer.y < height-160){
    farmer.y += 5;
  }

  if(keyIsDown(LEFT_ARROW) && farmer.x > width/4-100){
    farmer.x -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    farmer.x += 5;
  }
  
  // when "d" key clicked dirt image should appear
  if(keyWentDown("d")){
    dIsClicked += 1;
    digging(dIsClicked);
  }

  // when "p" key clicked seed image should appear
  if(keyWentDown("p")){
    pIsClicked += 1;
    planting(pIsClicked);
  }

  console.log(seed1.mouseIsPressed);
  if(seed1.mouseIsPressed) {
    showSwalBuy();
  }

  //displaying the sprites and calling the functions
  land1.showSquare();
  land2.showSquare();
  land3.showSquare();
  land4.showSquare();
  land5.showSquare();
  land6.showSquare();
  drawSprites();
  showMoneyBar();
  showSeedBagBar();
}

function windowResized() {
  //to set the canvas width and height to the screen width and height
  resizeCanvas(windowWidth, windowHeight);
}
