/*
Looping Structures
Created by Ryan Milne
May 7th, 2019
*/
let x = 0
let y = 100
let size = 40


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255);

}

function draw() {
  // put drawing code here

var x = 0

for (var x = 0; x <= width; x = x + size) {
// larger circles
  noStroke();
  fill(0,random(255),0);
  ellipse(x,random(windowHeight),size,size);
// random symbols
  textSize(25);
  fill(random(255));
  text(char(random(255)),random(windowWidth),random(windowHeight));
// smaller circles
  fill(random(255),0,random(255));
  ellipse(x,random(windowHeight),size-size/2,size-size/2);



}

}
