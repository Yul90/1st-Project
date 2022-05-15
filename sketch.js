

function preload(){
boximage=loadImage("FMKRCU_22.jpg")

}





function setup() {
  createCanvas(400,400);
   box = createSprite(200,200,25,25)
  box.addImage(boximage)
  box.scale=0.1
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
box.position.x+=5

  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x+=-5
  }

  if(keyIsDown(UP_ARROW)){
    box.position.y+=-5
  }

  if(keyIsDown(DOWN_ARROW)){
    box.position.y+=5 
  }
drawSprites()
}




