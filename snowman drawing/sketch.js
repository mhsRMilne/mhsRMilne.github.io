//snowman drawing, ryan milne, march 7th 2019

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(0, 255, 255);

  // The ground
  fill(0, 255, 102);
  rect(0, 300, 400, 100);

  // The sun
  fill(255, 234, 0);
  ellipse(80, 64, 100, 100);

  // The snowman
  fill(255, 255, 255);
  ellipse(200, 300, 150, 150);
  ellipse(200, 200, 100, 100);
  ellipse(200, 120, 75, 75);


}
