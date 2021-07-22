
//loads the images, animation and sound
function preload(){
  t_rex=loadAnimation('trex1.png','trex3.png','trex4.png')
  groundimg=loadImage('ground2.png')
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,180,5,4)
  trex.addAnimation('walking',t_rex)
  trex.scale=0.6
  ground=createSprite(300,190,600,20)
  ground.addImage(groundimg)
}

function draw(){
  background('lightgrey')
  trex.collide(ground)
  if (keyDown('space')) {
    trex.velocityY=-6
  }
  trex.velocityY=trex.velocityY+0.3
  ground.velocityX=-5
  if(ground.x<0){
    ground.x=600
  }
  drawSprites()
}
