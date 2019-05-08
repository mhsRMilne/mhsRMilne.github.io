/*
House Assignment
Ryan Milne
March 18, 2019
*/

function setup() {
  // put setup code here
  // create the canvas
  createCanvas(1200,800);
} // end setup

function draw() {
  // put drawing code here

  // background
  background(51,255,255);

  // The sun
  fill(255,234,0);
  ellipse(80,60,250,250);

  // ground
  fill(102,51,0);
  rect(0,height/2+houseWidth/2-20,1200,800);

  // 1st House

  // set the width of the house
  // change this variable to scale the house
  var houseWidth = 400;
  var width = 1200
  var height = 800

  // main part of the house
  fill(102,255,102);
  rect(width/2, height/2, houseWidth, houseWidth/2);

  // house windows
  fill(255,255,255);
  rect(width/2+houseWidth/15, height/2+houseWidth/25, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/15, height/2+houseWidth/7.1, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/6, height/2+houseWidth/25, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/6, height/2+houseWidth/7.1, houseWidth/10, houseWidth/10);
  // right house window
  rect(width/2+houseWidth/1.35, height/2+houseWidth/25, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/1.35, height/2+houseWidth/7.1, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/1.19, height/2+houseWidth/25, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/1.19, height/2+houseWidth/7.1, houseWidth/10, houseWidth/10);

  // door
  rect(width/2+houseWidth/2, height/2+houseWidth/4, houseWidth/8, houseWidth/4);
  rect(width/2+houseWidth/2.65, height/2+houseWidth/4, houseWidth/8, houseWidth/4);

  // door knob
  fill(0);
  ellipse(width/2+houseWidth/2.1,height/2+houseWidth/2.6,houseWidth/30,houseWidth/30);
  ellipse(width/2+houseWidth/1.88,height/2+houseWidth/2.6,houseWidth/30,houseWidth/30);
  // roof
  fill(255,105,180);
  line(width/2, height/2, width/2+houseWidth/2, height/2-houseWidth/2);
  line(width/2+houseWidth, height/2, width/2+houseWidth/2, height/2-houseWidth/2);
  // or
  triangle(width/2, height/2, width/2+houseWidth/2, height/2-houseWidth/2, width/2+houseWidth, height/2);

  // roof window
  fill(255,255,255);
  ellipse(width/2+houseWidth/2,height/2-houseWidth/4,houseWidth/7.5,houseWidth/5.5);

  // 2nd House

  // set the width of 2nd house
  // change this variable to scale 2nd house
  var houseWidth = 200;
  var width = 600
  var height = 1000

  // main part of the house
  fill(102,255,102);
  rect(width/2, height/2, houseWidth, houseWidth/2);

  // house windows
  fill(255,255,255);
  rect(width/2+houseWidth/15, height/2+houseWidth/25, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/15, height/2+houseWidth/7.1, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/6, height/2+houseWidth/25, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/6, height/2+houseWidth/7.1, houseWidth/10, houseWidth/10);
  // right house window
  rect(width/2+houseWidth/1.35, height/2+houseWidth/25, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/1.35, height/2+houseWidth/7.1, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/1.19, height/2+houseWidth/25, houseWidth/10, houseWidth/10);
  rect(width/2+houseWidth/1.19, height/2+houseWidth/7.1, houseWidth/10, houseWidth/10);

  // door
  rect(width/2+houseWidth/2, height/2+houseWidth/4, houseWidth/8, houseWidth/4);
  rect(width/2+houseWidth/2.65, height/2+houseWidth/4, houseWidth/8, houseWidth/4);

  // door knob
  fill(0);
  ellipse(width/2+houseWidth/2.1,height/2+houseWidth/2.6,houseWidth/30,houseWidth/30);
  ellipse(width/2+houseWidth/1.88,height/2+houseWidth/2.6,houseWidth/30,houseWidth/30);
  // roof
  fill(255,105,180);
  line(width/2, height/2, width/2+houseWidth/2, height/2-houseWidth/2);
  line(width/2+houseWidth, height/2, width/2+houseWidth/2, height/2-houseWidth/2);
  // or
  triangle(width/2, height/2, width/2+houseWidth/2, height/2-houseWidth/2, width/2+houseWidth, height/2);

  // roof window
  fill(255,255,255);
  ellipse(width/2+houseWidth/2,height/2-houseWidth/4,houseWidth/7.5,houseWidth/5.5);

} // end draw
