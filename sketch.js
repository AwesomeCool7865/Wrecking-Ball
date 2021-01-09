const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1, box2, box3, box4;
var wBall, wRope;

function setup(){
    createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 770, 1300, 40);

    box1 = new Boxy(600, 750, 75, 75);
    box2 = new Boxy(600, 675, 75, 75);
    box3 = new Boxy(600, 600, 75, 75);
    box4 = new Boxy(600, 525, 75, 75);

    wBall = new Ball(500, 450, 45);
    
    
}

function draw(){
    background('lightblue');

    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    wBall.display();


}