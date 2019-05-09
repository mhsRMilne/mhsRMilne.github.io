/*
Movement & If Statements
Ryan Milne
April 8th, 2019
*/

// global variables
// variables for 1st rectangle
let x=100;
let y=100;

// variables for 2nd rectangle
let x2=100;
let y2=100;

// variables for 3rd rectangle
let x3=100;
let y3=100;

// variables for 4th rectangle
let x4=100;
let y4=100;

// variables for circle
let x5=100;
let y5=100;

// movement for 1st rectangle
let xSpeed = 10;
let ySpeed = 10;

// movement for 2nd rectangle
let x2Speed = -15;
let y2Speed = -15;

// movement for 3rd rectangle
let x3Speed = 25;
let y3Speed = 4;

// movement for 4th rectangle
let x4Speed = -3;
let y4Speed = -20;

// sizing for rectangles
let rectWidth = 50;
let rectHeight = 50;

function setup() {
  // put setup code here
  // create the canvas
  createCanvas(windowWidth,windowHeight);

} // end setup

function draw() {
  // put drawing code here
  // background
  background(255);

  // draw rectangles
  rect(x,y,rectWidth,rectHeight);
  rect(x2,y2,rectWidth,rectHeight);
  rect(x3,y3,rectWidth,rectHeight);
  rect(x4,y4,rectWidth,rectHeight);

  // draw circle
  ellipse(x5,y5,25,25);

  //move rectangles
  x = x+xSpeed;
  y = y+ySpeed;
  x2 = x2+x2Speed;
  y2 = y2+y2Speed;
  x3 = x3+x3Speed;
  y3 = y3+y3Speed;
  x4 = x4+x4Speed;
  y4 = y4+y4Speed;

  // 1st Square
  //if reaches bottom or top, change direction
  if (y+rectHeight>=height || y<=0) {
    ySpeed = ySpeed*(-1);
    fill(random(0,255),random(0,255),random(0,255));
  }

//if reaches right or left, change direction
  else if (x+rectWidth>=width || x<=0) {
    xSpeed = xSpeed*(-1);
    fill(random(0,255),random(0,255),random(0,255));
  }

  // 2nd Square
  //if reaches bottom or top, change direction
  if (y2+rectHeight>=height || y2<=0) {
    y2Speed = y2Speed*(-1);
    fill(random(0,255),random(0,255),random(0,255));
  }

    //if reaches right or left, change direction
  else if (x2+rectWidth>=width || x2<=0) {
    x2Speed = x2Speed*(-1);
    fill(random(0,255),random(0,255),random(0,255));
  }

  // 3rd square
  //if reaches bottom or top, change direction
  if (y3+rectHeight>=height || y3<=0) {
    y3Speed = y3Speed*(-1);
    fill(random(0,255),random(0,255),random(0,255));
  }

        //if reaches right or left, change direction
  else if (x3+rectWidth>=width || x3<=0) {
    x3Speed = x3Speed*(-1);
    fill(random(0,255),random(0,255),random(0,255));
  }

  // 4th square
  //if reaches bottom or top, change direction
  if (y4+rectHeight>=height || y4<=0) {
    y4Speed = y4Speed*(-1);
    fill(random(0,255),random(0,255),random(0,255));
  }

  //if reaches right or left, change direction
  else if (x4+rectWidth>=width || x4<=0) {
    x4Speed = x4Speed*(-1)
    fill(random(0,255),random(0,255),random(0,255));
  }

  // using arrow keys to move ellipse
  if (keyIsDown(LEFT_ARROW)) {
    x5 = x5-5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x5 = x5+5;
  }

  if (keyIsDown(UP_ARROW)) {
    y5 = y5-5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y5 = y5+5;
  }

} // end draw
