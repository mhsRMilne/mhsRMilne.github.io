/*
Snowman Drawing
Ryan Milne
March 7th, 2019
*/

function setup() {
  // put setup code here
  // create the canvas
  createCanvas(400,400);
} // end setup

function draw() {
  // put drawing code here
  background(0, 255, 255);

  // the ground
  fill(0, 255, 102);
  rect(0, 300, 400, 100);

  // the sun
  fill(255, 234, 0);
  ellipse(80, 64, 100, 100);

  // the snowman
  fill(255, 255, 255);
  ellipse(200, 300, 150, 150);
  ellipse(200, 200, 100, 100);
  ellipse(200, 120, 75, 75);

} // end draw
