const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;
var timer;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    block = new Box(900,130,50,50)
    block1 = new Box(925,130,50,50)
    block2 = new Box(875,130,50,50)
    block3 = new Box(910,100,50,50)
    block4 = new Box(890,100,50,50)
    block5 = new Box(900,70,30,30)
    block6 = new Box(900,360,50,50)
    block7 = new Box(875,360,50,50)
    block8 = new Box(925,360,50,50)
    block9 = new Box(950,360,50,50)
    block10 = new Box(850,360,50,50)
    block11 = new Box(890,340,40,40)
    block12 = new Box(910,340,40,40)
    block13 = new Box(930,340,40,40)
    block14 = new Box(870,340,40,40)
    block15 = new Box(880,325,30,30)
    block16 = new Box(900,325,30,30)
    block17 = new Box(920,325,30,30)
    block18 = new Box(905,315,20,20)
    block19 = new Box(895,315,20,20)
    block20 = new Box(900,310,15,15)


    ground = new Ground(600,height,1200,20);
    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    platform = new Ground(150, 305, 300, 170);
    platform1 = new Ground(900, 140, 200, 10);
}

function draw(){

        background(0);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);

    block.display();
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
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    block.score();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
   
    ground.display();
    bird.display();
    slingshot.display(); 
    platform.display();   
    platform1.display();
    if(score===4200){
        text("YOU WIN!!!!!" ,600, 200)
        Matter.Body.setPosition(bird.body,{x:200 , y:66});
        slingshot.attach(bird.body);
       }
       if(frameCount>5050){
        Matter.Body.setPosition(bird.body,{x:200 , y:66});
        slingshot.attach(bird.body);
       }  
    
    
}

function mouseDragged(){
   // if (gameState!=="launched"){S
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   // }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200 , y:66});
        slingshot.attach(bird.body);
    }
}


