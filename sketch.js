const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10;
var hero,monster,string,ground;
 

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  string = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 80, 70, 70);
  box2 = new Box(600, 80, 70, 70);
  box3 = new Box(600, 80, 70, 70);
  box4 = new Box(600, 80, 70, 70);
  box5 = new Box(600, 80, 70, 70);
  box6 = new Box(600, 80, 270, 70);
  box7 = new Box(600, 60, 270, 70);
  box8 = new Box(900, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(900, 100, 70, 70);

  

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()

  hero.display();
  string.display();
  monster.display();

  mouseDragged();

}


  function mouseDragged(){
 
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
   
}

 








