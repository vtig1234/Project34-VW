//Project 30
//Viyath Wanninayake
//02/02/2021

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg,bg1
var hero1
var launcher1
var ground1
var block1
var block2
var block4
var block5
var block6
var block7
var block8
var block9
var block10
var block11
var block12
var block13
var block14

function preload(){
  bg = loadImage("GamingBackground.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground1 = new ground(0,700,200000,20);
    hero1 = new superHero(200,200,20);
    launcher1 = new launcher(hero1.body,{x:200,y:400});
    block1 = new block(500,620,40,40);
    block2 = new block(500,570,40,40);
    block3 = new block(500,520,40,40);
    block4 = new block(500,470,40,40);
    block5 = new block(500,420,40,40);
    block6 = new block(500,370,40,40);
    block7 = new block(570,620,40,40);
    block8 = new block(570,570,40,40);
    block9 = new block(570,520,40,40);
    block10 = new block(570,470,40,40);
    block11 = new block(570,420,40,40);
    block12 = new block(570,370,40,40);
    block13 = new block(570,320,40,40);
    block14 = new block(570,270,40,40);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(bg);
  fill("red");
  drawSprites();
  ground1.display();
  hero1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
}



function mouseDragged(){
  //Make the ball follow the mouser if mouse is dragged
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  //Make it fly if mouse is released
  launcher1.fly();
}

function keyPressed(){
  if (keyCode===32){
    launcher1.attach(hero1.body)
  }
}



