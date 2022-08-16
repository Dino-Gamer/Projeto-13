var garden,rabbit;
var gardenImg,rabbitImg, grass;
var appleImg, apple, orangeImg, redImg, orangeLeaf, redLeaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);







}








function draw() {
  background(0);

rabbit.x = World.mouseX;

var select_sprites = Math.round(random(1,3));

if (frameCount % 80 == 0){
  if (select_sprites == 1){
    createApples();
  }
  else if (select_sprites == 2){
    createOrangeLeaf();
  }
  else {
    createRedLeaf();
  }
}


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}


//função de criar e movimentar a maçã
function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

//função de criar e movimentar a folha laranja
function createOrangeLeaf() {
  orangeLeaf = createSprite(random(50, 350),40, 10, 10);
  orangeLeaf.addImage(orangeImg);
  orangeLeaf.scale=0.07;
  orangeLeaf.velocityY = 3;
  orangeLeaf.lifetime = 150;
}

//função de criar e movimentar a folha vermelha
function createRedLeaf() {
  redLeaf = createSprite(random(50, 350),40, 10, 10);
  redLeaf.addImage(redImg);
  redLeaf.scale=0.07;
  redLeaf.velocityY = 3;
  redLeaf.lifetime = 150;
}