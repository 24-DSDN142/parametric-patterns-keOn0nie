//setup - run once when the code is first starts
function setup() {
  createCanvas(150, 150); // this sets the size of the area in which we can draw things
  background(240);
}
//draw - this function loops, the code within read through repeatedly while running
function draw() {
  let hX = 75;
  let hY = 90;
DrawBunnyHead(75,85);

}

function DrawBunnyHead(headX,headY){
 
  let eyeY = headY - 10;
  let earY = headY - 40;
  let eyeSize = 10;
  
  fill(255);
  stroke(71, 102, 155); // blue colour


  ellipse(headX - 15, earY, 20, 70); // left ear
  ellipse(headX + 15, earY, 20, 70);

  ellipse(headX, headY, 70, 70); //head

  fill(71, 102, 155) // blue colour

  ellipse(headX - 15, eyeY, eyeSize, eyeSize) //left eye // 60 before

  ellipse(headX + 15, eyeY, eyeSize, eyeSize) // right eye

  line(headX - 5, headY + 10, headX + 5, headY + 5);
  line(headX + 5, headY + 10, headX - 5, headY + 5);

}