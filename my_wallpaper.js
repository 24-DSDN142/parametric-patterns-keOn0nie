//your parameter variables go here!
var bX1 = 80; //x location of first bee 
var bY1 = 50; //y location of first bee 

var bX2 = 180 //x location of second bee
var bY2 = 140//y location of second bee

var bHeight = 35; //height value of bee elements (except curve values)
var bLength = 50; //length value of bee elements (except curve values)

var fX1 = 160 //x location of first flower
var fY1 = 35  //y location of first flower

var fX2 = 50  //x location of second flower
var fY2 = 150 //y location of second flower

var fX3 = 150 //x location of third flower
var fY3 = 180 //y location of third flower

var fX4 = 30  //x location of forth flower
var fY4 = 90  //y location of forth flower

var fX5 = 110 //x location of fifth flower
var fY5 = 150 //y location of fifth flower

var fX6 = 100 //x location of sixth flower
var fY6 = 70  //y location of sixth flower

var PetalHex1 = '#C1E3FF' //hex for first petals
var MidHex1 = '#9ACCFF'  //hex for first middle flower

var PetalHex2 = '#C1E3FF' //hex for second petals
var MidHex2 = '#9ACCFF'  //hex for second middle flower


var PetalHex3 = '#b899ff' //hex for third petals
var MidHex3 = '#704bc4'  //hex for third middle flower

var PetalHex4 = '#b899ff'  //hex for forth petals
var MidHex4 = '#704bc4'  //hex for forth middle flower

var PetalHex5 = '#b899ff' //hex for fifth petals
var MidHex5 = '#704bc4' //hex for fifth middle flower

var PetalHex6 = '#ffb5f6' //hex for sixth petals
var MidHex6 = '#cf63c1'  //hex for sixth middle flower

var lX1 = 205 //x value of ladybug
var lY1 = 100 //y value of ladybug

var lX2 = 100 //x value of second ladybug
var lY2 = 200 //y value of second ladybug

var lH = 150 //height value of ladybug 
var lL = 50 //length value of ladybug

var sX1 = 20 //x value of sparkle 
var sY1 = 30 //y value of sparkle 

var sX2 = 145 //x value of sparkle 
var sY2 = 131 //y value of sparkle 

var sX3 = 80 //x value of sparkle 
var sY3 = 110 //y value of sparkle 


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print
angleMode(DEGREES);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background("#ff7595"); //light pinkish yellow
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

 DrawFlower(fX1,fY1,PetalHex1,MidHex1); //default blue flower
 DrawFlower(fX2,fY2,PetalHex2,MidHex2); //default blue flower
 DrawFlower(fX3,fY3, PetalHex3, MidHex3); //x,y location of red flower 
 DrawFlower(fX4,fY4, PetalHex4, MidHex4); //x,y location of red flower 
 DrawFlower(fX5,fY5,PetalHex5, MidHex5); //x,y location of purple flower 
 DrawFlower(fX6,fY6,PetalHex6,MidHex6); //pink flower

 DrawBee(bX1,bY1,bHeight,bLength); //x, y, height, length 

 DrawBee(bX2,bY2,bHeight,bLength); //x, y, height, length 

 DrawLadyBird(lX1,lY1,lH,lL); //x, y, height, length of ladybird/bug
 DrawLadyBird(lX2,lY2,lH,lL) //x, y, height, length of ladybird/bug



 DrawSparkle(sX1,sY1); //x, y location of sparkle
 DrawSparkle(sX2,sY2); //x, y location of sparkle
 DrawSparkle(sX3,sY3); //x, y location of sparkle

}

function DrawFlower(x,y, petalColour,midColour){

  const originalPetalHex = '#C1E3FF'; //'const' making sure the code keeps track and cements the hex values in relation to the corresponding 'if' statement
  const RedPetalHex = '#FF5733'
  const PurplePetalHex = '#b899ff'
  const PinkPetalHex = '#ffb5f6'
  
  let AnglePetalSizeX = 50; //giving more context for the 'if' statement to function properly, having the petal and middleflower xy variables stated inside the function rather than outside.
  let AnglePetalSizeY = 15;
  let UpDownPetalSizeX = 15;
  let UpDownPetalSizeY = 50;
  let LeftRightPetalSizeX = 50;
  let LeftRightPetalSizeY = 15;
  let MidFlowerSizeX = 20;
  let MidFlowerSizeY = 20;

  if (petalColour === RedPetalHex) { //if the value stored in 'petalcolour' (the value of which can be changed using the 'let' variables at the draw point and const) equals 'RedPetalHex' (stated in the const) is the same, adjust the x,y size values of flower by an amount (in this case divided by 2)
    AnglePetalSizeX /= 2;
    AnglePetalSizeY /= 2;
    UpDownPetalSizeX /= 2;
    UpDownPetalSizeY /= 2;
    LeftRightPetalSizeX /= 2;
    LeftRightPetalSizeY /= 2;
    MidFlowerSizeX /= 2;
    MidFlowerSizeY /= 2;
  }
    if (petalColour === PurplePetalHex) { //"
    AnglePetalSizeX /= 2.5;
    AnglePetalSizeY /= 2.5;
    UpDownPetalSizeX /= 2.5;
    UpDownPetalSizeY /= 2.5;
    LeftRightPetalSizeX /= 2.5;
    LeftRightPetalSizeY /= 2.5;
    MidFlowerSizeX /= 2.5;
    MidFlowerSizeY /= 2.5;
    }
  if (petalColour === PinkPetalHex) { //"
    AnglePetalSizeX *= 1.5;
    AnglePetalSizeY *= 1.5;
    UpDownPetalSizeX *= 1.5;
    UpDownPetalSizeY *= 1.5;
    LeftRightPetalSizeX *= 1.5;
    LeftRightPetalSizeY *= 1.5;
    MidFlowerSizeX *= 1.5;
    MidFlowerSizeY *= 1.5;
  }
  
  push()
  translate(x,y); 
  
  stroke("#bbe090"); //green stem colour
  strokeWeight(2);
  noFill();

  let stemControlP1 = { x:0, y: 50}; //simplified version of the bee curve functions
  let stemControlP2 = { x: 20, y: 100};
  let stemEndP = { x: 0, y: 80};

  curve(stemControlP1.x, stemControlP1.y,0,0,stemEndP.x, stemEndP.y, stemControlP2.x, stemControlP2.y); //stem

  push()
  noStroke();
  rotate(45)
  fill(petalColour);
   ellipse(10,0,AnglePetalSizeX,AnglePetalSizeY); //AngleRightBot
   rotate(90)
   ellipse(10,0,AnglePetalSizeX,AnglePetalSizeY); //AngleLeftBot
   rotate(90)
   ellipse(10,0,AnglePetalSizeX,AnglePetalSizeY); //AngleLeftTop
   rotate(90)
   ellipse(10,0,AnglePetalSizeX,AnglePetalSizeY); //AngleRightTop
  pop()

  noStroke();
  fill(petalColour);
  ellipse(0,10,UpDownPetalSizeX,UpDownPetalSizeY); //StraightBotPet 
  ellipse(0,-10,UpDownPetalSizeX,UpDownPetalSizeY); //StraightTopPet
  ellipse(10,0,LeftRightPetalSizeX,LeftRightPetalSizeY); //StraightRightPet
  ellipse(-10,0,LeftRightPetalSizeX,LeftRightPetalSizeY); //StraightLeftPet
  
  //middle of flower
  fill(midColour);
  ellipse(0,0,MidFlowerSizeX,MidFlowerSizeY); //MidFlower 
  pop()
}
  
function DrawBee(bX,bY,bHeight,bLength) {
  noStroke(); //no stroke for wings
  fill("#fffafa8"); //white fill for wings
  ellipse(bX-10, bY-28, bHeight-30, bLength-30); //wing 1
  ellipse(bX+8, bY-28, bHeight-30, bLength-30);  //wing 2
  
  noStroke(); 
  fill("#f0db71"); //lighter yellow fill for body
  ellipse(bX,bY,bHeight+3,bLength-10); //body light
  fill("#edcf39"); //darker yellow fill for back of body on top of lighter shade
  arc(bX,bY,bHeight+3,bLength-10,-90,90); //body shaded

  noFill(); 
  strokeWeight(2); //stroke for bee curves
  stroke(0); 

  let C1A1 = {x: bX - 65, y: bY - 24}; //c = curve, a = anchor point ; each 'C#A#' function having x,y values relating to bees x and y location
  let C1A2 = {x: bX - 30, y: bY - 20};
  let C2A1 = {x: bX - 65, y: bY - 24};
  let C2A2 = {x: bX - 30, y: bY - 20};
  let C3A1 = {x: bX - 65, y: bY - 24};
  let C3A2 = {x: bX - 30, y: bY - 0};

  curve(C1A1.x,C1A1.y,bX+6,bY-18,bX+6,bY+19,C1A2.x,C1A2.y); //back curve
  curve(C2A1.x,C2A1.y,bX-2,bY-19,bX,bY+20,C2A2.x,C2A2.y); //middle curve
  curve(C3A1.x,C3A1.y,bX-8,bY-18,bX-6,bY+20,C3A2.x,C3A2.y); //front curve
  
  ellipse(bX-15,bY-7,2,2); //eye


}
function DrawLadyBird(lX,lY,lH,lL){
 
 stroke(0);
 strokeWeight(1)
 line(lX-27,lY-25,lX-20,lY-22); //left top leg
 line(lX-27,lY-19,lX-20,lY-19); //left middle leg
 line(lX-25,lY-14,lX-20,lY-19); //left bottom leg 

 line(lX-13,lY-25,lX-20,lY-22); //right top leg
 line(lX-13,lY-19,lX-20,lY-18); //right middle leg
 line(lX-22,lY-19,lX-14,lY-14); //right bottom leg

 line(lX-23,lY-32,lX-18,lY-25); //antena
 line(lX-17,lY-32,lX-20,lY-27) //antena

 fill(0);
 noStroke();
 ellipse(lX-20,lY-27,lH-195,lL-43) //head

 noStroke();
 fill("#ff2931");
 ellipse(lX-20,lY-20,lH-188,lL-35); //body
  
stroke(0);
strokeWeight(1);
 line(lX-20,lY-27,lX-20,lY-13); //body line

 ellipse(lX-23,lY-24,lH-199,lL-49); //left top body dot
 ellipse(lX-23,lY-20,lH-199,lL-49); //left middle body dot
 ellipse(lX-23,lY-16,lH-199,lL-49); //left bottom body dot
 
 ellipse(lX-18,lY-24,lH-199,lL-49) //right top body dot
 ellipse(lX-17,lY-20,lH-199,lL-49) //right middle body dot
 ellipse(lX-17,lY-16,lH-199,lL-49) //right bottom body dot

  }
function DrawSparkle(sX,sY){

  strokeWeight(1)
  stroke("#dbc500")
  line(sX,sY,sX,sY+15) //sparkle y
  line(sX-5,sY+7,sX+5,sY+7) //sparkle x

  }
  
  
  
  

   

  
