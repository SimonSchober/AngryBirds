// var st="string"
// console.log(st)
// var num=10
// console.log(num)
// var bool=true;
// console.log(bool)
// var obj=null
// console.log(obj)
// var ob
// console.log(ob);

// var arr1=[1,2,true,"tree",null]
// console.log(arr1)

// var arr2=[[1,2],"free",[5,6],false]
// console.log(arr2)

// var arr3=[[1,2],[2,3],[4,5],[6,7]]
// console.log(arr3[2][1])

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var bg = "bg.png"
var engine, world;
var box1, pig1;
var backgroundimg;
var gamestate = "onsling"
function preload() {
    getBackgroundIMG()
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(150, 305, 300, 170)

    ground = new Ground(600, height, 1200, 20)

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    log6 = new Log(230, 180, 80, PI / 2)
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(200, 50);
    chain = new Chain(bird.body, {x: 200, y: 50})


}

function draw() {
    if(backgroundimg)
    background(backgroundimg);
    Engine.update(engine);
 //   console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    platform.display();   
    log6.display();
   

    bird.display();
    chain.display()

   
   
}

function mouseDragged() {
  if(gamestate !== "launched"){
  Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY})
}
}
function mouseReleased() {
    chain.fly()
    gamestate = "launched"
}

async function getBackgroundIMG() {
    var response =  await fetch("https://worldtimeapi.org/api/timezone/Europe/Berlin")
    var responsejson = await response.json()
    var datetime = responsejson.datetime
    var hour = datetime.slice(11, 13) 
    console.log(hour)

    if(hour >= 700 && hour <= 1600) {
bg = "bg.png"
    }else{
        bg = "bg2.jpg"
    }
    backgroundimg = loadImage(bg)
}

function keyPressed(){
if(keyCode === 32){
  chain.attach(bird.body)
  gamestate = "onsling"
  bird.trajectory = []
  

}
}