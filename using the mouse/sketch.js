/*
Using the Mouse
Ryan Milne
April 10th, 2019
*/

let x = 1

function setup() {
  // put setup code here
  // create the canvas
  createCanvas(windowWidth,windowHeight);

} // end setup

function draw() {
  // put drawing code here
  // turn into squares
  if (mouseIsPressed) {

    if(x<=width) {
      rect(mouseX,mouseY,75,75);
    }

  }

} // end draw

// make ellipses
function mouseMoved() {

  if(x<=width) {
    ellipse(mouseX,mouseY,100,100);
    fill(random(0,255),random(0,255),random(0,255));
  }

} // end mouseMoved
