const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy;
var boyImage
var thunder, thunder1, thunder2, thunder3;
var maxDrops=100;
var drops=[];

function preload(){
    boyImage=loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
   thunder=loadImage("thunderbolt/1.png")
   thunder1=loadImage("thunderbolt/2.png")
   thunder2=loadImage("thunderbolt/3.png")
   thunder3=loadImage("thunderbolt/4.png")
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,1200),random(0,400)))
    }
    boy=Bodies.rectangle(300,230,100,250,{isStatic:true})
    World.add(world,this.boy)
    boySprite=createSprite(300,230,100,250)
    boySprite.scale=0.5
    boySprite.addAnimation("boy",boyImage)
    
}

function draw(){
    background("black")
    Engine.update(engine);

    
   rectMode(CENTER)
  // rect(boy.position.x,boy.position.y,100,250)

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();

    }
    spawnThunder();
    drawSprites();

    
}   
function spawnThunder(){
    if(frameCount%60===0){
        var thunderSprite = createSprite(random(200,800),50)
        var n=Math.round(random(1,4))
        if(n===1){
            thunderSprite.addImage(thunder)
        }
        if(n===2){
            thunderSprite.addImage(thunder1)
        }
        if(n===3){
            thunderSprite.addImage(thunder2)
        }
        if(n===4){
            thunderSprite.addImage(thunder3)
        }
        thunderSprite.lifetime=40
        thunderSprite.scale=0.5;

    }
}

