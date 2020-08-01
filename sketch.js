const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Drops = [];
var umberalla;
var thunder;
var frame = 0;
function preload() {
  //  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    for(var i = 0 ; i<100 ; i++){
        Drops.push(new Drop(random(100,400),random(300,600),5,5));
    }
    thunder = new Thunder(200,600,20,80);

    umberalla = new Umberella(200,500,20);


    
    //ground = new Ground(600,height,1200,20);
    
}

function draw(){
    background(0);
//    background(backgroundImg);
    Engine.update(engine);
    for(var i = 0 ; i<Drops.length; i++){
        Drops[i].display();
    }
    umberalla.display();
    frame += 0;
  //  switch(frame){
    //    case frame => frame%60 ===   0  :
            thunder.display();
      //  case frame => frame%80 === 0 :
       // break ;
    //}
    //strokeWeight(4);
   
    //log6.display();
   
}
