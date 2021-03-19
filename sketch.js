const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ballImg;

function preload(){
    ballImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(900,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    stand1 = new Stand(380,300,280,15);
    stand2 = new Stand(700,200,280,15);
    block1 = new Block(280,275,30,40);
    block2 = new Block(310,275,30,40);
    block3 = new Block(340,275,30,40);
    block4 = new Block(370,275,30,40);
    block5 = new Block(400,275,30,40);
    block6 = new Block(430,275,30,40);
    block7 = new Block(460,275,30,40);
    block8 = new Block(490,275,30,40);

    ball = Bodies.circle(50,200,20);
    ball = addImage("ballImg");

    World.add(world,ball);
    slingShot=new Slingshot(this.ball,{x:200,y:200});


}

function draw(){
    background("white");
    Engine.update(engine);
    stand1.display();
    stand2.display();
    ground.display();
    stroke(15);
    fill("black");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    text("drag the line and release to hit the crazy boxes",600,250);
    ellipse(ball.position.x,ball.positiony,20);
    slingShot.display();

}

function mouseDragged(){
    Matter.body.setPosition(this.ball,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    slingshot.fly();
}