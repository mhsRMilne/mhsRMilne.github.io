/*
Decision Structure
Created by Ryan Milne
April 30th, 2019
*/

/*
Level 0 --> Home Page
Level 1 --> Instructions
Level 2 --> Game
*/

let choices =['Rock','Paper','Scissors']
let comChoice;
let keyPress = false;

let level = 0;

let bg;

let myFont;

function preload() {

  bg = loadImage('8bit.png');
  myFont = loadFont('myfont.ttf');

}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight-5);
  //background


}

function draw() {
  // put drawing code here

  /*--------------------HOME PAGE--------------------*/
  if (level === 0) {
    background(bg);
    textSize(50);
    textFont(myFont);
    text('ENTER TO START',width/3,height/2);

    // move to next level
    if (keyIsDown(ENTER)) {
      level = level + 1;
    }
  }
 /*--------------------END HOME PAGE--------------------*/

 /*--------------------INSTRUCTIONS--------------------*/
   else if (level === 1) {
     background(bg);
     textSize(25);
     textAlign(CENTER);
     textFont(myFont);
     text('Use Keys R, P and S to throw Rock, Paper, Scissors',width/2,height/2);
     text('Space to Continue',width/2,height/2+50);

       // move to next level
     if (keyIsDown(32)) {
       level = level + 1;
     }
 }
/*--------------------END INSTRUCTIONS--------------------*/

/*--------------------GAME--------------------*/
  else if (keyPress === false) {

      background(bg);
      textSize(100);
      textFont(myFont);
      text('YOU',width/3,height/4.5);
      text('COM',width/1.5,height/4.5);

      line(width/2,0,width/2,height);
      }
  }


    function keyPressed() {

      //ROCK
      if(keyCode === 82) {
        clear();
        keyPress = true
        print('Rock');
        comChoice = random(choices);

        if(comChoice === 'Rock'); {
          background(bg);
          textSize(30);
          text('Rock',width/4,height/2);
          text(comChoice,width/1.3,height/2);
          textSize(50);
          text('TIE GAME',width/2,height/2);
        }

         if (comChoice === "Paper") {
          background(bg);
          textSize(30);
          text('Rock',width/4,height/2);
          text(comChoice,width/1.3,height/2);
          textSize(50);
          text('YOU LOSE',width/2,height/2);
        }

        else if (comChoice === "Scissors") {
          background(bg);
          textSize(30);
          text('Rock',width/4,height/2);
          text(comChoice,width/1.3,height/2);
          textSize(50);
          text('YOU WIN',width/2,height/2);
        }

      }
      //PAPER
      if(keyCode === 80) {
        clear();
        keyPress = true
        print('Paper');
        comChoice = random(choices);


        if(comChoice === 'Rock'); {
          background(bg);
          textSize(30);
          text('Paper',width/4,height/2);
          text(comChoice,width/1.3,height/2);
          textSize(50);
          text('YOU WIN',width/2,height/2);
        }

          if (comChoice === "Paper") {
          background(bg);
          textSize(30);
          text('Paper',width/4,height/2);
          text(comChoice,width/1.3,height/2);
          textSize(50);
          text('TIE GAME',width/2,height/2);
        }

        else if (comChoice === "Scissors") {
          background(bg);
          textSize(30);
          text('Paper',width/4,height/2);
          text(comChoice,width/1.3,height/2);
          textSize(50);
          text('YOU LOSE',width/2,height/2);
        }

      }

      //SCISSORS
      if(keyCode === 83) {
        clear();
        keyPress = true
        print('Scissors');
        comChoice = random(choices);


        if(comChoice === 'Rock'); {
          background(bg);
          textSize(30);
          text('Scissors',width/4,height/2);
          text(comChoice,width/1.3,height/2);
          textSize(50);
          text('YOU LOSE',width/2,height/2);
        }

         if (comChoice === "Paper") {
          background(bg);
          textSize(30);
          text('Scissors',width/4,height/2);
          text(comChoice,width/1.3,height/2);
          textSize(50);
          text('YOU WIN',width/2,height/2);
        }

        else if (comChoice === "Scissors") {
          background(bg);
          textSize(30);
          text('Scissors',width/4,height/2);
          text(comChoice,width/1.3,height/2);
          textSize(50);
          text('TIE GAME',width/2,height/2);
        }

      }
    }

/*--------------------END GAME--------------------*/
