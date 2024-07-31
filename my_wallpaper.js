//your parameter variables go here!
var bX = 100;
var bY = 50;
var bHeight = 50;
var bLength = 50;

// var bX = 100; in case shit fucks
// var bY = 50;
// var bHeight = 50;
// var bLength = 50;

var MidFlowerSizeX = 20;
var MidFlowerSizeY = 20;

var MidFlowerHEX = '#9ACCFF';
var PetalHex = '#C1E3FF';

var AnglePetalSizeX = 30;
var AnglePetalSizeY = 15;

var UpDownPetalSizeX = 15;
var UpDownPetalSizeY = 30;
var LeftRightPetalSizeX = 30;
var LeftRightPetalSizeY = 15;

var lX = 200
var lY = 50
var lH = 200
var lL = 50

var sX = 30
var sY = 30


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print
angleMode(DEGREES);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background("#fbe9dd"); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 let fX = 100;
 let fY = 100;
 
 let bX = 100;
 let bY = 50;
 let bHeight = 50;
 let bLength = 50;
 

let PinkPetalHex = '#ffb5f6';
let PinkMidFlowerHex = '#cf63c1';
 DrawFlower(100,70,PinkPetalHex,PinkMidFlowerHex);
 DrawFlower(10,35,PetalHex,MidFlowerHEX);
 DrawFlower(50,150,PetalHex,MidFlowerHEX);


let RedPetalHex = '#FF5733';
let RedMidFlowerHex = '#bf2200';
DrawFlower(200,110, RedPetalHex, RedMidFlowerHex);

let PurplePetalHex = '#b899ff'
let PurpleMidFlowerHex = '#704bc4'
DrawFlower(180,-10,PurplePetalHex, PurpleMidFlowerHex);

DrawBee(bX,bY,bHeight,bLength);

let newBX = 150;
let newBY = 150;

DrawBee(newBX,newBY,bHeight,bLength);
 let newFX = 150;
 let newFY = 50;

//  let lY = 200;
//  let lY = 50;
 
 DrawLadyBug(lX,lY,lH,lL);
 DrawLadyBug(40,65,lH,lL)

 DrawSparkle(sX+15,sY+5);
 DrawSparkle(sX+130,sY+40);

 
 
}

function DrawBee(bX,bY,bHeight,bLength) {
  noStroke();
  fill("#fffafa8");
  ellipse(bX-10, bY-28, bHeight-30, bLength-30); //wing 1
  ellipse(bX+8, bY-28, bHeight-30, bLength-30);  //wing 2
  
  noStroke();
  fill("#f0db71");
  ellipse(bX,bY,bHeight+3,bLength-10); //body light
  fill("#edcf39");
  arc(bX,bY,bHeight+3,bLength-10,-90,90); //body shaded

  noFill();
  strokeWeight(2);
  stroke(0);

  let C1A1 = {x: bX - 65, y: bY - 24};
  let C1A2 = {x: bX - 30, y: bY - 20};
  let C2A1 = {x: bX - 65, y: bY - 24};
  let C2A2 = {x: bX - 30, y: bY - 20};
  let C3A1 = {x: bX - 65, y: bY - 24};
  let C3A2 = {x: bX - 30, y: bY - 0};

  curve(C1A1.x,C1A1.y,bX+6,bY-18,bX+6,bY+19,C1A2.x,C1A2.y); //back curve
  curve(C2A1.x,C2A1.y,bX-2,bY-19,bX,bY+20,C2A2.x,C2A2.y); //middle curve
  curve(C3A1.x,C3A1.y,bX-8,bY-18,bX-6,bY+20,C3A2.x,C3A2.y); //front curve
  
  ellipse(bX-15,bY-7,2,2); //eye

 

  noStroke();
  fill("#ff91a5");
  
}
  
function DrawFlower(x,y, petalColour,midColour){
  
  const originalPetalHex = '#C1E3FF';

  const RedFlowerHex = '#FF5733'

  const PurpleFlowerHex = '#b899ff'

  const PinkFlowerHex = '#ffb5f6'
  
  let AnglePetalSizeX = 30;
  let AnglePetalSizeY = 15;
  let UpDownPetalSizeX = 15;
  let UpDownPetalSizeY = 30;
  let LeftRightPetalSizeX = 30;
  let LeftRightPetalSizeY = 15;
  let MidFlowerSizeX = 20;
  let MidFlowerSizeY = 20;

  if (petalColour === RedFlowerHex) {
    AnglePetalSizeX /= 2;
    AnglePetalSizeY /= 2;
    UpDownPetalSizeX /= 2;
    UpDownPetalSizeY /= 2;
    LeftRightPetalSizeX /= 2;
    LeftRightPetalSizeY /= 2;
    MidFlowerSizeX /= 2;
    MidFlowerSizeY /= 2;
  }
    if (petalColour === PurpleFlowerHex) {
    AnglePetalSizeX /= 2.5;
    AnglePetalSizeY /= 2.5;
    UpDownPetalSizeX /= 2.5;
    UpDownPetalSizeY /= 2.5;
    LeftRightPetalSizeX /= 2.5;
    LeftRightPetalSizeY /= 2.5;
    MidFlowerSizeX /= 2.5;
    MidFlowerSizeY /= 2.5;
    }
 
  if (petalColour === PinkFlowerHex) {
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
  
  stroke("#bbe090");
  strokeWeight(2);
  noFill();

  let stemControlP1 = { x:0, y: 50};
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
  
function DrawLadyBug(lX,lY,lH,lL){
 
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
  stroke("#a7ab37")
  line(sX,sY,sX,sY+15)
  line(sX-5,sY+7,sX+5,sY+7)

  // function DrawHeart(x,y){
   
    // triangle(75,75,25,75,75,25);
    // triangle(75,75,25,75,75,125);
    // triangle(75,75,125,75,75,25);
    // triangle(75,75,125,75,75,125);
    // circle(50,50, Math.sqrt(50 * 50 + 50 * 50));
    // circle(100,50, Math.sqrt(50 * 50 + 50 * 50));
  
  
  
  }
  
  
  
  

   

  
//   let bX = 100;  just in case this shit fucks up
//  let bY = 50;
//  let bHeight = 50;
//  let bLength = 50;
 
//  DrawBee(bX,bY,bHeight,bLength);

//  let newBX = 150;
//  let newBY = 150;

//  DrawBee(newBX,newBY,bHeight,bLength);

// let flowerCoordinates = [
//   {x: 100, y: 100},
//   {x: 10, y: 50},
//   {x: 50, y: 150}
// ];

// for (let i = 0; i < flowerCoordinates.length; i++) { //let is for block-scoped variables, so defining within the block rather than outside the block- var is for function scoped variables so will set variables for the whole thing?
//   let coord = flowerCoordinates[i];
//   DrawFlower (coord.x, coord.y);
// }
// }

//  let newFX = 150;
//  let newFY = 50;



// function DrawBee(bX,bY,bHeight,bLength) {
//   noStroke();
//   fill("#fffafa8");
//   ellipse(bX-10, bY-28, bHeight-30, bLength-30); // Wing 1
//   ellipse(bX+8, bY-28, bHeight-30, bLength-30);  // Wing 2
//   // line(85,57,88,54);
  
//   noStroke();
//   fill("#f0db71");
//   ellipse(bX,bY,bHeight+3,bLength-10);
//   fill("#edcf39");
//   arc(bX,bY,bHeight+3,bLength-10,-90,90);

//   noFill();
//   strokeWeight(2);
//   stroke(0);

//   let C1A1 = {x: bX - 65, y: bY - 24};
//   let C1A2 = {x: bX - 30, y: bY - 20};
//   let C2A1 = {x: bX - 65, y: bY - 24};
//   let C2A2 = {x: bX - 30, y: bY - 20};
//   let C3A1 = {x: bX - 65, y: bY - 24};
//   let C3A2 = {x: bX - 30, y: bY - 0};

//   curve(C1A1.x,C1A1.y,bX+6,bY-18,bX+6,bY+19,C1A2.x,C1A2.y);
//   curve(C2A1.x,C2A1.y,bX-2,bY-19,bX,bY+20,C2A2.x,C2A2.y);
//   curve(C3A1.x,C3A1.y,bX-8,bY-18,bX-6,bY+20,C3A2.x,C3A2.y);
  
//   ellipse(bX-15,bY-7,2,2);

 

//   noStroke();
//   fill("#ff91a5");
  
 

  


