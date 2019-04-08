/*
Movement & If Statements
Created by Ryan Milne
April 4th, 2019
*/

//Global variables
let x=100;
let y=100;

let xSpeed = 7;
let ySpeed = 7;

let rectWidth = 50;
let rectHeight = 50;



function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight,WEBGL);


}

function draw() {
  // put drawing code here

//change the background

background(255);

//rectangle width & height



rotateX(frameCount * 0.05);
rotateZ(frameCount * 0.05);
cylinder(50,250);

//draw rectangle

  rect(x,y,rectWidth,rectHeight);
  rect(x+100,y+50,rectWidth,rectHeight);

//move rectangle
  x = x+xSpeed;
  y = y+ySpeed;

//if reaches bottom or top, change direction
  if (y+rectHeight>=height || y<=0) {
  ySpeed = ySpeed*(-1);

  fill(random(0,255),random(0,255),random(0,255));
//  background(random(0,255),random(0,255),random(0,255));

  }

//if reaches right or left, change direction
else if (x+rectWidth>=width || x<=0) {
  xSpeed = xSpeed*(-1);

  fill(random(0,255),random(0,255),random(0,255));
  // background(random(0,255),random(0,255),random(0,255));

  }




}
