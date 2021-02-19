
var garden,gardenimg;
var cat,cat_sitting,cat_walking,cat_stopped;
var mouse,mouse_cheese,mouse_taunting,mouse_end;


function preload() {
    cat_sitting = loadAnimation("cat1.png");
    cat_walking = loadAnimation("cat2.png","cat3.png");
    cat_stopped = loadAnimation("cat4.png");

    mouse_cheese = loadAnimation("mouse1.png");
    mouse_taunting = loadAnimation("mouse2.png","mouse3.png");
    mouse_end = loadAnimation("mouse4.png");

    gardenimg = loadImage("garden.png");

  
}

function setup(){
    createCanvas(1000,800);

  garden = createSprite(490,400,1000,800);
  garden.addImage("garden",gardenimg);

cat = createSprite(800,600,40,40);
 
  cat.addAnimation("sitting",cat_sitting);
  
  cat.scale= 0.2;


  mouse = createSprite(50,600,40,40);
  mouse.addAnimation("mouse_holdingCheese", mouse_cheese);
 
 keyPressed();

  mouse.scale= 0.1;
}

function draw() {


     if(cat.x - mouse.x < (cat.width - mouse.width)/2) {

      cat.addAnimation("stopped",cat_stopped);
      cat.changeAnimation("stopped");
       mouse.addAnimation("mouse_over", mouse_end);
      mouse.changeAnimation("mouse_over");
      cat.velocityX=0;
    }

    
    
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW) {

   cat.velocityX=-5;
   cat.addAnimation("walking",cat_walking);
   cat.changeAnimation("walking");
   
   mouse.addAnimation("mouse_taunt", mouse_taunting);
   mouse.changeAnimation("mouse_taunt");

  }


}
