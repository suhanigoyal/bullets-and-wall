var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50, 200, 10, 60);
  bullet.velocityX=speed;
  fill("white");
  wall=createSprite(1200,200,thickness,height/2);
  fill(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);




function hascollided(bullet,wall){

bulletRightEdge=bullet.x +bullet.width;
wallleftEdge=wall.x;
if(bulletRightEdge>=wallleftEdge){
return true
}
return false
}









if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
  }

  if(damage>10){
    wall.shapeColor=color(250,0,0);
    
    }

 if(damage<10) {  
wall.shapeColor=color(0,255,0)
}
drawSprites();
}


  

