'use strict'
let angleRight = 10;
let angleWave;
let mic;
let micLevel;
let yesDraw = false;
let leftArm0;
let banana0;
let banana1;
let banana2;
let banana3;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
  banana0 = new banana(width * .39, width * .57, 20, 2);
  banana1 = new banana(width* .20, width* .8, 50, .6);
  banana2 = new banana(width * .09, width * .27, 20, 1.3);
  banana3 = new banana(width* .8, width* .6, 50, 1);
}
//_means a temporary variable

function draw() {
  background(70, 102, 57);
  
  micLevel = mic.getLevel();
  //ellipse(width/2, constrain(height - micLevel * height * 5, 0, height), 10, 10);
  //console.log("mic level " + mic.getLevel ());

  micLevel=mic.getLevel();
  angleWave = map(mic.getLevel(), 0, .8, 210, 260);
  drawMonkeyBody();
  drawMonkeyHead();
  drawLeftArm(height * .24,height * .5, angleWave);
  drawRightArm(angleRight);
  if(yesDraw == true){
    circle(width/2, height/2, 50);
  }
  banana0.display();
  banana1.display();
  banana2.display();
  banana3.display();
  
  banana0.move();
  banana1.move();
  banana2.move();
  banana3.move();
  //drawBanana(width * .39, width * .57, 20);
}

function mousePressed(){
  
  //if the position of the mouse is inside this region then do this
  
  if(mouseX > width*0.44 && mouseX < width*0.8 && mouseY > height * 0.35 && mouseY < height * .8){
    console.log("mouse beep in there");
    angleRight = -angleRight;
     }else if(mouseX < width *.2 || mouseX > width* .8){
       yesDraw= !yesDraw;
  }
}
 function drawMonkeyHead(){
  drawEars();
  //head
   strokeWeight(width * .002);
  fill(131, 89, 53);
  circle(width * .5, height * .26, width * .38)

  //skin under eyes
  fill(205, 155, 60);
  ellipse(width * .5, height * .24, height * .24, height * 0.12);

  //mouth skin
  fill(205, 155, 60);
  ellipse(width * .5, height * .34, width * .16,  height * .16);

  //left eye
  fill(0, 0, 0);
  ellipse(width * .46, height * .24, width * .03, height * .036);


  //right eye
  fill(0, 0, 0);
  ellipse(width * .54, height * .24, width * .03, height * .036);

  //mouth
  strokeWeight(10);
  line(width * .48, height * .36, width * .52,  height * .36);

}
function drawMonkeyBody(){
//body
  strokeWeight(width * .002);
  fill(131, 89, 53);
  circle(width * .5, height * .64, height * .58);

  //left foot
  fill(131, 89, 53);
  rect(width * .34, width * .8, width * .14, width * .16, width * .04);


  //left bottom
  fill(131, 89, 53);
  rect(width * .54, width * .8, width * .14,width * .16, width * .04);

  
  //right foot
  fill(205, 155, 60);
  rect(width * .36, width * .82, width * .1, width * .12, width * .04);

  //right bottom
  fill(205, 155, 60);
  rect(width * .56, width * .82, width * .1, width * .12, width * .04);

}
function drawLeftArm(xPos, yPos, rotation){
   //left arm
  push();
  translate(xPos,yPos);
  rotate(rotation);
  //left hand
  fill(205, 155, 60);
  strokeWeight(width * .002);
  circle(width * .46-height * .24, height * .64-height * .5, height * .08);

  fill(131, 89, 53);
  strokeWeight(width * .002);
  beginShape();
  vertex(0, 0);
  vertex(width * .21-height * .24, height * .6-height * .5);
  vertex(width * .44 -height * .24, height * .68 -height * .5);
  vertex(width * .48-height * .24, height * .6-height * .5);
  endShape(CLOSE);
   pop();
}

function drawRightArm(rotation){
   //right hand
  push();
  translate(width * .76, width * .5)
  rotate(rotation);
  fill(205, 155, 60);
  strokeWeight(width * .002);
  circle(width * .56-width * .76, height * .64-width * .5, height * .08);
  //right arm
  fill(131, 89, 53);
  strokeWeight(width * .002);
  beginShape();
  vertex(0,0);
  vertex(width * .79-width * .76, width * .6-width * .5);
  vertex(width * .58-width * .76, width * .68-width * .5);
  vertex(width * .54-width * .76, width * .6-width * .5);
  endShape(CLOSE);
  pop();
}
function drawEars(){
  //left ear
  strokeWeight(width * .002);
  fill(205, 155, 60);
  ellipse(width * .32, height * .24, width * .12, width * .14);

  //right ear
  fill(205, 155, 60);
  ellipse(width * .68,  height * .24, width * .12, width * .14);

}
function drawBanana(xPos, yPos, rotation){
  push();
  translate(xPos, yPos)
  rotate(rotation);
  fill(231,195,47);
  strokeWeight(0.2);
  rect(width * .46-width * .39, width * .57-width * .57, width * .05, width * .20, width * .5);
  rect(width * .43-width * .39, width * .57-width * .57, width * .05, width * .19, width * .5);
  rect(width * .40-width * .39, width * .57-width * .57, width * .05, width * .15, width * .5);
  fill(225,231,47);
  rect(xPos, yPos, width * .13, width * .05, width * .05);
  pop();
}