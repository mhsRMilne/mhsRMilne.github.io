/*
SUMMATIVE ASSIGNMENT
Created by Ryan Milne
June 7th, 2019
*/

/*
Level 0 --> Home Page
Level 1 --> Instructions
Level 2 --> Game
Level 3 --> Lose Page
Level 4 --> Win Page
*/

// GLOBAL VARIABLES

// set level
let level = 0

//toadder position
let x=610;
let y=854

// log position - row 1
let x201=0;
let x202=500;
let x203=1000;
let y2=150;
// log position - row 2
let x301=0;
let x302=350;
let x303=700;
let x304=1050;
let y3=175;
// log position - row 3
let x401=0;
let x402=850;
let y4=225;
// log position - row 4
let x501=0;
let x502=275;
let x503=550;
let x504=825;
let x505=1100;
let y5=275;
// log position - row 5
let x601=000;
let x602=850;
let y6=325;
// log position - row 6
let x701=200;
let x702=700;
let x703=1200;
let y7=375;
// log position - row 7
let x801=0;
let x802=350;
let x803=700;
let x804=1050;
let y8=425;
// road line position
let x9 = 0;
let y9 = 627;
// truck position - row 1
let x1101=200;
let x1102=950;
let y11=740;
// truck position - row 2
let x1201=300;
let x1202=1050;
let y12=640;
// truck position - row 3
let x13=610;
let y13=537.5;

// log and truck speeds
let xSpeed = 1;
let x2Speed = 2;
let x3Speed = 3;
let x4Speed = 1.5;
let x5Speed = 5;
let x6Speed = 10;
let x7Speed = 25;

//log heights
let rectHeight = 50;
let rectHeight2 = 25;
// log widths
let rectWidth1 = 200;
let rectWidth2 = 150;
let rectWidth3 = 400;
let rectWidth4 = 100;
let rectWidth5 = 400;

// set hit
let hit = false;
// set life
let life = 3;
// size of circles for WIN and LOSE pages
let size = 5;
//set score (0/5)
let score = 0;
// when goal is reached, keep Toadder there
let scoreToadder1 = 0
let scoreToadder2 = 0
let scoreToadder3 = 0
let scoreToadder4 = 0
let scoreToadder5 = 0

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
  if (keyCode === ENTER && level===0){
    level = level + 1;
  }
  if (keyCode === (32) && level===1){
    level = level + 1;
  }
  // restart game
  if (keyCode === (82) && level===3){
    level = 0;
    life = 3;
    score = 0;
    scoreToadder1 = 0;
    scoreToadder2 = 0;
    scoreToadder3 = 0;
    scoreToadder4 = 0;
    scoreToadder5 = 0;
  }
  if (keyCode === (82) && level===4){
    level = 0;
    life = 3;
    score = 0;
    scoreToadder1 = 0;
    scoreToadder2 = 0;
    scoreToadder3 = 0;
    scoreToadder4 = 0;
    scoreToadder5 = 0;
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
  //draw lives (top right)
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

function drawScore () {
  //draw score (top left)
  if (score === 0){
    textSize(50);
    textFont(myFont);
    textAlign(CENTER);
    stroke(0,0,255);
    strokeWeight(10);
    fill(255);
    text('0/5', width/1.1,height/16);
  }
  if (score === 1){
    textSize(50);
    textFont(myFont);
    textAlign(CENTER);
    stroke(0,0,255);
    strokeWeight(10);
    fill(255);
    text('1/5', width/1.1,height/16);
  }
  if (score === 2){
    textSize(50);
    textFont(myFont);
    textAlign(CENTER);
    stroke(0,0,255);
    strokeWeight(10);
    fill(255);
    text('2/5', width/1.1,height/16);
  }
  if (score === 3){
    textSize(50);
    textFont(myFont);
    textAlign(CENTER);
    stroke(0,0,255);
    strokeWeight(10);
    fill(255);
    text('3/5', width/1.1,height/16);
  }
  if (score === 4){
    textSize(50);
    textFont(myFont);
    textAlign(CENTER);
    stroke(0,0,255);
    strokeWeight(10);
    fill(255);
    text('4/5', width/1.1,height/16);
  }
  if (score === 5){
    textSize(50);
    textFont(myFont);
    textAlign(CENTER);
    stroke(0,0,255);
    strokeWeight(10);
    fill(255);
    text('5/5', width/1.1,height/16);
    level = level + 2
  }
  // draw Toadder when score
  if (scoreToadder1 === 1){
    drawToadder(110,105);
  }
  if (scoreToadder2 === 1){
    drawToadder(360,105);
  }
  if (scoreToadder3 === 1){
    drawToadder(610,105);
  }
  if (scoreToadder4 === 1){
    drawToadder(860,105);
  }
  if (scoreToadder5 === 1){
    drawToadder(1110,105);
  }
} // end drawScore

function drawTrucks(x,y){
  // draw trucks
  fill(255,105,180);
  stroke(0);
  strokeWeight(5);
  rect(x,y,250,75);
  strokeWeight(2);
  fill(51,236,255);
  rect(x+25,y-10,25,10)
  rect(x+25,y+75,25,10)
  rect(x+200,y-10,25,10)
  rect(x+200,y+75,25,10)
  fill(0,255,0);
  rect(x+10,y+10,30,55);
  rect(x+210,y+10,30,55);
} // end drawTrucks

function draw() {
  // put drawing code here

/*--------------------HOME PAGE--------------------*/
  if (level === 0){
    background(homebg);
    textSize(50);
    textFont(myFont);
    textAlign(CENTER);
    stroke(255);
    strokeWeight(10);
    text('WELCOME TO',width/2,height/6);
    text('TOADDER',width/2,height/4);
    textSize(20);
    strokeWeight(5);
    text('Enter to Continue',width/2,height/1.25);
  }
 /*--------------------END HOME PAGE--------------------*/

/*--------------------INSTRUCTIONS--------------------*/
  else if (level === 1) {
    background(instructbg);
    textSize(30);
    fill(255);
    stroke(0);
    strokeWeight(10);
    text('INSTRUCTIONS',width/3.5,height/3.5);
    textSize(20);
    strokeWeight(5);
    text('Use Arrow Keys To Move Toadder',width/3.5,height/2.5);
    textSize(15);
    text('Avoid Hazards And Falling In The Water \n Get Toadder Back To His Home Between The Hedges',width/3.5,height/2);
    textSize(20);
    text('Press Space To Play',width/3.5,height/1.6);
    textSize(15);
    text('P.S. Even A Drop Of Water Will Hurt Toadder \n So Remember, Patience Is A Virtue!',width/3.5,height/1.4);
  }
/*--------------------END INSTRUCTIONS--------------------*/

/*--------------------GAME--------------------*/
  else if (level === 2) {
    // background setting
    background(0);
    strokeWeight(3);
    stroke(0);
    // safe lanes
    fill(241,102,0);
    rect(0,height-50,width,50);
    rect(0,height-400,width,50);
    // road
    fill(255,0,0);
    rect(0,height-350,width,300);
    // road lines
    for (var x9 = 0; x9 <= width; x9 = x9 + 100) {
      strokeWeight(5);
      line(x9,y9,x9+50,y9);
      line(x9,y9+100,x9+50,y9+100);
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
    //1st row
    rect(x201,y2,rectWidth1,rectHeight2);
    rect(x202,y2,rectWidth1,rectHeight2);
    rect(x203,y2,rectWidth1,rectHeight2);
    //2nd row
    rect(x301,y3,rectWidth2,rectHeight);
    rect(x302,y3,rectWidth2,rectHeight);
    rect(x303,y3,rectWidth2,rectHeight);
    rect(x304,y3,rectWidth2,rectHeight);
    //3rd row
    rect(x401,y4,rectWidth3,rectHeight);
    rect(x402,y4,rectWidth3,rectHeight);
    //4th row
    rect(x501,y5,rectWidth4,rectHeight);
    rect(x502,y5,rectWidth4,rectHeight);
    rect(x503,y5,rectWidth4,rectHeight);
    rect(x504,y5,rectWidth4,rectHeight);
    rect(x505,y5,rectWidth4,rectHeight);
    //5th row
    rect(x601,y6,rectWidth5,rectHeight);
    rect(x602,y6,rectWidth5,rectHeight);
    //6th row
    rect(x701,y7,rectWidth1,rectHeight);
    rect(x702,y7,rectWidth1,rectHeight);
    rect(x703,y7,rectWidth1,rectHeight);
    //7th row
    rect(x801,y8,rectWidth2,rectHeight);
    rect(x802,y8,rectWidth2,rectHeight);
    rect(x803,y8,rectWidth2,rectHeight);
    rect(x804,y8,rectWidth2,rectHeight);

    // move logs
    // 1st row
    x201 = x201+x4Speed;
    x202 = x202+x4Speed;
    x203 = x203+x4Speed;
    //2nd row
    x301 = x301-xSpeed;
    x302 = x302-xSpeed;
    x303 = x303-xSpeed;
    x304 = x304-xSpeed;
    //3rd row
    x401 = x401+x2Speed;
    x402 = x402+x2Speed;
    //4th row
    x501 = x501-xSpeed;
    x502 = x502-xSpeed;
    x503 = x503-xSpeed;
    x504 = x504-xSpeed;
    x505 = x505-xSpeed;
    //5th row
    x601 = x601+x2Speed;
    x602 = x602+x2Speed;
    //6th row
    x701 = x701-xSpeed;
    x702 = x702-xSpeed;
    x703 = x703-xSpeed;
    //7th row
    x801 = x801+x3Speed;
    x802 = x802+x3Speed;
    x803 = x803+x3Speed;
    x804 = x804+x3Speed;

    // keep logs in game
    // 1st row
    if(x201>=width) {
      x201 = 0-rectWidth1
    }
    else if(x202>=width) {
      x202 = 0-rectWidth1
    }
    else if(x203>=width) {
      x203 = 0-rectWidth1
    }
    //2nd row
    if(x301+rectWidth2<=0) {
      x301 = width
    }
    else if(x302+rectWidth2<=0) {
      x302 = width
    }
    else if(x303+rectWidth2<=0) {
      x303 = width
    }
    else if(x304+rectWidth2<=0) {
      x304 = width
    }
    //3rd row
    if(x401>=width) {
      x401 = 0-rectWidth3
    }
    else if(x402>=width) {
      x402 = 0-rectWidth3
    }
    //4th row
    if(x501+rectWidth4<=0) {
      x501 = width
    }
    else if(x502+rectWidth4<=0) {
      x502 = width
    }
    else if(x503+rectWidth4<=0) {
      x503 = width
    }
    else if(x504+rectWidth4<=0) {
      x504 = width
    }
    else if(x505+rectWidth4<=0) {
      x505 = width
    }
    //5th row
    if(x601>=width) {
      x601 = 0-rectWidth5
    }
    else if(x602>=width) {
      x602 = 0-rectWidth5
    }
    //6th row
    if(x701+rectWidth1<=0) {
      x701 = width
    }
    else if(x702+rectWidth1<=0) {
      x702 = width
    }
    else if(x703+rectWidth1<=0) {
      x703 = width
    }
    //7th row
    if(x801>=width) {
      x801 = 0-rectWidth2
    }
    else if(x802>=width) {
      x802 = 0-rectWidth2
    }
    else if(x803>=width) {
      x803 = 0-rectWidth2
    }
    else if(x804>=width) {
      x804 = 0-rectWidth2
    }
    //if toadder runs into hedges
    hit = collideRectRect(x-5,y-25,60,45,0,height-800,89,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,179,height-800,160,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,429,height-800,160,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,679,height-800,160,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,929,height-800,160,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,1179,height-800,101,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    // if toadder falls in water
    //1st row
    hit = collideRectRect(x-5,y-25,60,45,x201+rectWidth1,y2+5,300,rectHeight2-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x202+rectWidth1,y2+5,300,rectHeight2-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x203+rectWidth1,y2+5,275,rectHeight2-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    // 2nd row
    hit = collideRectRect(x-5,y-25,60,45,x301+rectWidth2,y3+5,200,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x302+rectWidth2,y3+5,200,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x303+rectWidth2,y3+5,200,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x304+rectWidth2,y3+5,225,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    // 3rd row
    hit = collideRectRect(x-5,y-25,60,45,x401+rectWidth3,y4+5,450,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x402+rectWidth3,y4+5,425,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    // 4th row
    hit = collideRectRect(x-5,y-25,60,45,x501+rectWidth4,y5+5,175,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x502+rectWidth4,y5+5,175,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x503+rectWidth4,y5+5,175,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x504+rectWidth4,y5+5,175,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x505+rectWidth4,y5+5,175,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    // 5th row
    hit = collideRectRect(x-5,y-25,60,45,x601+rectWidth5,y6+5,450,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x602+rectWidth5,y6+5,425,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    // 6th row
    hit = collideRectRect(x-5,y-25,60,45,x701+rectWidth1,y7+5,300,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x702+rectWidth1,y7+5,300,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x703+rectWidth1,y7+5,275,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    // 7th row
    hit = collideRectRect(x-5,y-25,60,45,x801+rectWidth2,y8+5,200,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x802+rectWidth2,y8+5,200,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x803+rectWidth2,y8+5,200,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x804+rectWidth2,y8+5,225,rectHeight-5);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }

    //trucks
    drawTrucks(x1101,y11);
    drawTrucks(x1102,y11);
    drawTrucks(x1201,y12);
    drawTrucks(x1202,y12);
    drawTrucks(x13,y13);
    //move trucks
    x1101 = x1101+x5Speed;
    x1102 = x1102+x5Speed;
    x1201 = x1201-x6Speed;
    x1202 = x1202-x6Speed;
    x13 = x13+x7Speed;
    //keep trucks in game
    if(x1101>=width) {
      x1101 = 0-250
    }
    else if(x1102>=width) {
      x1102 = 0-250
    }
    else if(x1201+250<=0) {
      x1201 = width
    }
    else if(x1202+250<=0) {
      x1202 = width
    }
    else if(x13>=width) {
      x13 = 0-250
    }
    //if toadder gets hit by trucks
    hit = collideRectRect(x-5,y-25,60,45,x1101,y11,250,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x1102,y11,250,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x1201,y12,250,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x1202,y12,250,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }
    hit = collideRectRect(x-5,y-25,60,45,x13,y13,250,75);
    if (hit) {
      life = life - 1
      x=610;
      y=855;
    }

    // toadder character
    drawToadder(x,y);
    //keep toadder on screeen
    if(x+20>width) {
      x = width-60
    }
    else if(x+30<0) {
      x = 10
    }
    else if(y+20>=height){
      y = height-20
    }

    // lives
    if(life === 3||life === 2||life === 1) {
      drawLife()
    }
    // game over screen
    else if (life === 0){
      level = level + 1
    }
    // score
    drawScore()
    hit = collideRectRect(x-5,y-25,60,45,89,height-800,90,25);
    if (hit) {
      score = score + 1
      x=610;
      y=855;
      scoreToadder1 = scoreToadder1 + 1
    }
    hit = collideRectRect(x-5,y-25,60,45,339,height-800,90,25);
    if (hit) {
      score = score + 1
      x=610;
      y=855;
      scoreToadder2 = scoreToadder2 + 1
    }
    hit = collideRectRect(x-5,y-25,60,45,589,height-800,90,25);
    if (hit) {
      score = score + 1
      x=610;
      y=855;
      scoreToadder3 = scoreToadder3 + 1
    }
    hit = collideRectRect(x-5,y-25,60,45,839,height-800,90,25);
    if (hit) {
      score = score + 1
      x=610;
      y=855;
      scoreToadder4 = scoreToadder4 + 1
    }
    hit = collideRectRect(x-5,y-25,60,45,1089,height-800,90,25);
    if (hit) {
      score = score + 1
      x=610;
      y=855;
      scoreToadder5 = scoreToadder5 + 1
    }

    // help Mr.Hughes find where to go
    fill(255);
    strokeWeight(5);
    stroke(0);
    textSize(20);
    textFont(myFont);
    textAlign(CENTER);
    text('-->',55,125);
    text('-->',305,125);
    text('-->',555,125);
    text('-->',805,125);
    text('-->',1055,125);
    text('<--',215,125);
    text('<--',465,125);
    text('<--',715,125);
    text('<--',965,125);
    text('<--',1215,125);
  }
/*--------------------END GAME--------------------*/

/*--------------------LOSE--------------------*/
  else if (level === 3) {
    // looping structure takes over screen
    var x10 = 0
    for (var x10 = 0; x10 <= width; x10 = x10 + size) {
      noStroke();
      fill(random(255),0,0);
      ellipse(x10,random(windowHeight),5,5);
    }
    //text
    fill(0);
    strokeWeight(20);
    stroke(0,0,255);
    textSize(100);
    textFont(myFont);
    textAlign(CENTER);
    text('YOU LOSE',width/2,height/1.8);
    textSize(50);
    strokeWeight(10);
    text('R To Restart', width/2, height/1.5);
  }
/*--------------------END LOSE--------------------*/

/*--------------------WIN--------------------*/
  else if (level === 4) {
    // looping structure takes over screen
    var x10 = 0
    for (var x10 = 0; x10 <= width; x10 = x10 + size) {
      noStroke();
      fill(0,random(255),0);
      ellipse(x10,random(windowHeight),5,5);
    }
    text
    fill(0);
    strokeWeight(20);
    stroke(0,0,255);
    textSize(75);
    textFont(myFont);
    textAlign(CENTER);
    text('CONGRATULATIONS',width/2,height/3);
    textSize(100);
    text('YOU WIN',width/2,height/1.8);
    textSize(50);
    strokeWeight(10);
    text('R To Restart', width/2, height/1.5);
  }
/*--------------------END WIN--------------------*/
} // end draw
