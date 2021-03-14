const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var database;
var canvas;
var gameState = 0;
var count = 0;
var allPlayers;
var score=0;
var sling, engine, world;

var distance = 0;

var player, form, game;
var player1, player2, player3, player4, player6;
var players;
var stone1image, stone2image, stone3image, stone4image, stone5image, stone6image, stone7image;
var backgroundimg, playerimg;
var ballimage, ball;




function preload() {
  //ballimage = loadImage("images/ball.jpg");
  stone1image = loadImage("images/1.jpg");
  stone2image = loadImage("images/2.jpg");
  stone3image = loadImage("images/3.jpg");
  stone4image = loadImage("images/4.jpg");
  stone5image = loadImage("images/2.jpg");
  stone6image = loadImage("images/2.jpg");
  stone7image = loadImage("images/1.jpg");
  backgroundimg = loadImage("images/openground.jpg");
  playerimg = loadImage("images/man.png")
}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  engine = Engine.create();
  world = engine.world;
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  stone1 = createSprite(500, 700, 10, 10);
  stone1.addImage(stone1image);
  stone2 = createSprite(500, 650, 10, 10);
  stone2.addImage(stone2image);
  stone3 = createSprite(500, 600, 10, 10);
  stone3.addImage(stone3image);
  stone4 = createSprite(500, 550, 10, 10);
  stone4.addImage(stone4image);
  stone5 = createSprite(500, 500, 10, 10);
  stone5.addImage(stone5image);
  stone6 = createSprite(500, 450, 10, 10);
  stone6.addImage(stone6image);
  stone7 = createSprite(500, 400, 10, 10);
  stone7.addImage(stone7image);

  player1 = createSprite(950, 600, 20, 20);
  // player1.addImage(playerimg)
  player2 = createSprite(900, 500, 20, 20);
  //player2.addImage(playerimg)
  player3 = createSprite(850, 450, 20, 20);
  //player3.addImage(playerimg)
  player4 = createSprite(100, 250, 20, 20);
  //player4.addImage(playerimg)
  player5 = createSprite(150, 100, 20, 20);
  //player5.addImage(playerimg)
  player6 = createSprite(200, 150, 20, 20);
  //player6.addImage(playerimg)

 // sling = new Sling(ball.body, { x: 200, y: 250 })
  ball = new Ball(100, 100, 30);

}

function draw() {
  background(backgroundimg);
  Engine.update(engine);
  if (count === 6) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    // ball.display();
    game.play();
  }
  if (gameState === 2) {

    game.end();

  }
  player1.display();
  player2.display();
  player3.display();
  player4.display();
  player5.display();
  player6.display();

textSize(40);
  text("Score : "+score,750,40);

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}