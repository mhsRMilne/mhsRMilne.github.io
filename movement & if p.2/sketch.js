/*
Movement & If Statements Part 2
Created by Ryan Milne
April 8th, 2019
*/

//Global variables
let x=100;
let y=100;

let x2=100;
let y2=100;

let x3=100;
let y3=100;

let x4=100;
let y4=100;

let x5=100;
let y5=100;


let xSpeed = 10;
let ySpeed = 10;

let x2Speed = -15;
let y2Speed = -15;

let x3Speed = 25;
let y3Speed = 4;

let x4Speed = -3;
let y4Speed = -20;

let rectWidth = 50;
let rectHeight = 50;



function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);


}

function draw() {
  // put drawing code here

//change the background

background(255);

//draw rectangle

  rect(x,y,rectWidth,rectHeight);
  rect(x2,y2,rectWidth,rectHeight);
  rect(x3,y3,rectWidth,rectHeight);
  rect(x4,y4,rectWidth,rectHeight);

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


//if reaches bottom or top, change direction
  if (y+rectHeight>=height || y<=0) {
  ySpeed = ySpeed*(-1);

  fill(random(0,255),random(0,255),random(0,255));
  //background(random(0,255),random(0,255),random(0,255));

  }

//if reaches right or left, change direction
else if (x+rectWidth>=width || x<=0) {
  xSpeed = xSpeed*(-1);

  fill(random(0,255),random(0,255),random(0,255));
//  background(random(0,255),random(0,255),random(0,255));

  }





  // other square


  //if reaches bottom or top, change direction
    if (y2+rectHeight>=height || y2<=0) {
    y2Speed = y2Speed*(-1);

    fill(random(0,255),random(0,255),random(0,255));
    //background(random(0,255),random(0,255),random(0,255));

    }

    //if reaches right or left, change direction
    else if (x2+rectWidth>=width || x2<=0) {
      x2Speed = x2Speed*(-1);

      fill(random(0,255),random(0,255),random(0,255));
    //  background(random(0,255),random(0,255),random(0,255));

      }

      // other other square


      //if reaches bottom or top, change direction
        if (y3+rectHeight>=height || y3<=0) {
        y3Speed = y3Speed*(-1);

        fill(random(0,255),random(0,255),random(0,255));
      //  background(random(0,255),random(0,255),random(0,255));

        }

        //if reaches right or left, change direction
        else if (x3+rectWidth>=width || x3<=0) {
          x3Speed = x3Speed*(-1);

          fill(random(0,255),random(0,255),random(0,255));
        //  background(random(0,255),random(0,255),random(0,255));

          }

          // other other other square


          //if reaches bottom or top, change direction
            if (y4+rectHeight>=height || y4<=0) {
            y4Speed = y4Speed*(-1);

            fill(random(0,255),random(0,255),random(0,255));
          //  background(random(0,255),random(0,255),random(0,255));

            }

            //if reaches right or left, change direction
            else if (x4+rectWidth>=width || x4<=0) {
              x4Speed = x4Speed*(-1);

              fill(random(0,255),random(0,255),random(0,255));
            //  background(random(0,255),random(0,255),random(0,255));

              }





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







}
