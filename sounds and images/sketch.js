/*
Sounds and Images
Created by Ryan Milne
April 25th, 2019
*/

let width = 1200;
let height = 800;

let x = 150;
let y = 325;

let x2 = 1050;
let y2 = 325;

let x3 = 600;
let y3 = 400;

let x3Speed = 10;
let y3Speed = 10;

let ellipseWidth = 25;
let ellipseHeight = 25;

let hit = false

let mySound;

let img;

let img2;

function preload(){

  img = loadImage('meme.png');

  img2 = loadImage('meme3.png');

  mySound = loadSound('slappy.mp3');

} // end preload

function setup() {
  // put setup code here

  createCanvas(width,height);

} // end setup

function draw() {
  // put drawing code here
  // if ball hits paddles, change direction
  hit = collideRectCircle(x,y,10,150,x3,y3,25,25);

  if (hit) {
    x3Speed = x3Speed*(-1); 
    mySound.setVolume(0.5);
    mySound.play();
  }

  hit = collideRectCircle(x2,y2,10,150,x3,y3,25,25);

  if (hit) {
    x3Speed = x3Speed*(-1);
    mySound.setVolume(0.5);
    mySound.play();
  }

  hit = collideLineCircle(width-50,0,width-50,height,x3,y3,25,25) || collideLineCircle(50,0,50,height,x3,y3,25,25);

  if (hit) {
    background(255,0,0);
    textSize(50);
    text('SPACE TO RESET',400,400);

    image(img,-50,100);
    image(img2,875,250);
  }

  else {
    background(51,255,138);

    strokeWeight(1);

    stroke(255);

    fill(255);

    rect(x,y,10,150);

    rect(x2,y2,10,150);

    line(width/2,0,width/2,height);

    fill(255,0,0);

    ellipse(x3,y3,25,25);

    strokeWeight(5);

    stroke(0);

    line(width-50,0,width-50,height);

    line(50,0,50,height);

    x3 = x3+x3Speed;
    y3 = y3+y3Speed;

    //if reaches bottom or top, change direction
    if (y3+ellipseHeight/2>=height || y3-ellipseHeight/2<=0) {
      y3Speed = y3Speed*(-1);
    }
    
    // using arrow keys to move paddles

    // left paddle

    if (keyIsDown(UP_ARROW)) {
      y2 = y2-5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      y2 = y2+5;
    }

    // right paddle

    if (keyIsDown(87)) {
      y = y-5;
    }

    if (keyIsDown(83)) {
      y = y+5;
    }

  }

  // reset game

  if (keyIsDown(32)) {
    x3 = 600;
    y3 = 400;
  }


} // end draw
