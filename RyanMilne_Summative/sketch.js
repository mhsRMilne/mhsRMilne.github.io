/*
SUMMATIVE ASSIGNMENT
Created by Ryan Milne
June 7th, 2019
*/

/*
Level 0 --> Home Page
Level 1 --> Instructions
Level 2 --> Game - Stage 1
*/

// GLOBAL VARIABLES

let level = 0

let x=610;
let y=855;

let x201=0;
let x202=500;
let x203=1000;
let y2=150;

let x301=0;
let x302=350;
let x303=700;
let x304=1050;
let y3=175;

let x4=100;
let y4=100;

let x5=100;
let y5=100;

let x6=100;
let y6=100;

let x7=100;
let y7=100;



let x10 = 0;
let y10 = 627;

let xSpeed = 1;
let x2Speed = 1;
let x3Speed = 1;
let x4Speed = 1;
let x5Speed = 1;

let rectWidth1 = 200;
let rectHeight1 = 25;

let rectWidth2 = 150;
let rectHeight2 = 50;


let hit = false;
let life = 3;

function preload() {

  myFont = loadFont('myFont.ttf');
  homebg = loadImage('homebg.jpg');
  instructbg = loadImage('instructbg.jpg');
  toadder = loadImage('toadder.png');
} // end preload


function setup() {
  // put setup code here
  createCanvas(1275,875);
} // end setup

function keyPressed(){
  // move to next levels
  if (keyCode === ENTER && level===0 || level===1){
    level = level + 1;
  }
  // move toadder
  if (keyCode === UP_ARROW) {
    y = y-50;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y = y+50;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x = x-50;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x = x+50;
  }
} // end keyPressed

function draw() {
  // put drawing code here

/*--------------------HOME PAGE--------------------*/
  if (level === 0){
    background(homebg);
    textSize(50);
    textFont(myFont);
    textAlign(CENTER);
    text('WELCOME TO',width/2,height/6);
    text('TOADDER',width/2,height/4);
    textSize(20);
    text('Enter to Continue',width/2,height/1.25);
  }
 /*--------------------END HOME PAGE--------------------*/


/*--------------------INSTRUCTIONS--------------------*/
  else if (level === 1) {

    background(instructbg);
    textSize(30);
    fill(255);
    text('INSTRUCTIONS',width/4,height/3.5);
    textSize(20);
    text('Use Arrow Keys to move Toadder',width/4,height/2.5);
    textSize(15);
    text('Avoid Hazards and Falling in the Water \n Get Toadder Back to his Home at the Hedges',width/4,height/2);
    textSize(20);
    text('Enter to Play',width/4,height/1.5);
  }
/*--------------------END INSTRUCTIONS--------------------*/


/*--------------------GAME--------------------*/

  else if (level === 2) {
    // background setting
    background(0);
    strokeWeight(3);
    // safe lanes
    fill(255,153,51);
    rect(0,height-50,width,50);
    rect(0,height-400,width,50);
    // road
    fill(255,0,0);
    rect(0,height-350,width,300);

    // road lines
    for (var x10 = 0; x10 <= width; x10 = x10 + 100) {
      strokeWeight(5);
      line(x10,y10,x10+50,y10);
      line(x10,y10+100,x10+50,y10+100);
    }
    //water
    fill(51,60,255);
    rect(0,height-825,width,425);
    //hedge
    strokeWeight(2);
    stroke(255,255,0);
    fill(51,255,97);
    rect(0,height-825,width,25);
    rect(0,height-800,89,75);
    rect(179,height-800,160,75);
    rect(429,height-800,160,75);
    rect(679,height-800,160,75);
    rect(929,height-800,160,75);
    rect(1179,height-800,101,75);
    stroke(0);
    // info background
    strokeWeight(0);
    fill(255);
    rect(0,0,width,50);
    // moving pieces of game
    // logs
    strokeWeight(3);
    fill(87,14,14);
    rect(x201,y2,rectWidth1,rectHeight1);
    rect(x202,y2,rectWidth1,rectHeight1);
    rect(x203,y2,rectWidth1,rectHeight1);

    rect(x301,y3,rectWidth2,rectHeight2);
    rect(x302,y3,rectWidth2,rectHeight2);
    rect(x303,y3,rectWidth2,rectHeight2);
    rect(x304,y3,rectWidth2,rectHeight2);

    // move logs
    x201 =x201+x2Speed
    x202 =x202+x2Speed
    x203 =x203+x2Speed

    x301 =x301-x3Speed
    x302 =x302-x3Speed
    x303 =x303-x3Speed
    x304 =x304-x3Speed


    x4 =x4+x4Speed
    x5 =x5+x5Speed
    // keep logs in game
    if(x201>=width) {
      x201 = 0-rectWidth1
    }
    if(x202>=width) {
      x202 = 0-rectWidth1
    }
    if(x203>=width) {
      x203 = 0-rectWidth1
    }

    if(x301+rectWidth2<=0) {
      x301 = width
    }
    if(x302+rectWidth2<=0) {
      x302 = width
    }
    if(x303+rectWidth2<=0) {
      x303 = width
    }
    if(x304+rectWidth2<=0) {
      x304 = width
    }


    // toadder character
    drawToadder(x,y)
    //keep toadder on screeen
    if(x>width) {
      x = 0
    }
    if(x+40<0) {
      x = width
    }
    if(y+20>=height){
      y = height-20
    }

    // collision
  //  hit = collideRectRect(x-5,y-25,60,45,0,100,width,500);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }

    // lives
    if(life === 3||life === 2||life === 1) {
      drawLife()
    }
    // game over screen
    else if (life === 0){
      background(0);
    }
  }

} // end draw

function drawToadder(x,y) {
  strokeWeight(0);
  fill(255,255,255);
  // body
  //eyes
  fill(0);
  rect(x+10,y-20,5,5);
  rect(x+35,y-20,5,5);
  //accent
  fill(255,255,0);
  rect(x+10,y-15,10,5);
  rect(x+15,y-20,5,5);
  rect(x+20,y-25,5,5);
  rect(x+30,y-20,5,10);
  rect(x+35,y-15,5,5);
  rect(x+15,y-5,5,10);
  rect(x+10,y+5,5,5);
  rect(x+20,y+5,5,5);
  rect(x+15,y+10,5,5);
  rect(x+35,y+5,5,5);
  rect(x+30,y+10,5,5);
  //torso
  fill(184,51,255);
  rect(x+15,y-25,5,5);
  rect(x+25,y-25,10,5);
  rect(x+20,y-20,10,25);
  rect(x+10,y-10,5,15);
  rect(x+15,y-10,25,5);
  rect(x+20,y-5,20,5);
  rect(x+20,y,20,5);
  rect(x+15,y+5,5,5);
  rect(x+25,y+5,10,5);
  rect(x+20,y+10,10,5);
  //left rear leg
  fill(70,255,51);
  rect(x,y,10,5);
  rect(x,y+5,5,15);
  rect(x-5,y+10,5,5);
  //left front leg
  rect(x,y-10,10,5);
  rect(x,y-25,5,15);
  rect(x-5,y-20,5,5);
  //right rear leg
  rect(x+40,y,10,5);
  rect(x+45,y+5,5,15);
  rect(x+50,y+10,5,5);
  //right front leg
  rect(x+40,y-10,10,5);
  rect(x+45,y-25,5,15);
  rect(x+50,y-20,5,5);
} // end drawToadder

function drawLife() {
  if (life === 3){
    drawToadder(10,30);
    drawToadder(80,30);
    drawToadder(150,30);
  }
  if(life === 2) {
    drawToadder(10,30);
    drawToadder(80,30);
  }
  if(life === 1) {
    drawToadder(10,30);
  }
} // end drawLife

/*--------------------END GAME--------------------*/
