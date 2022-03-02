
//ball variables
let ballX;
let ballY;
let ballSpeedX;
let ballSpeedY;

let score = 0;

let mouseCollide;

function setup(){
  createCanvas(windowWidth, windowHeight)
  ballX = random(15, windowWidth-15)
  ballY = random(15, windowHeight-15);
  ballSpeedX = 2;
  ballSpeedY = 2;
  textAlign(CENTER);
}

function draw(){
  background(0);
  fill(255);
  textSize(40);
  text("Score: " + score + "00", windowWidth/2, 60)

  mouseCollide = dist(ballX, ballY, mouseX, mouseY)

  //changing the speed of the ball
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;

  //reverse the course of the ball
  if(ballX >= windowWidth - 15 || ballX <= 15 ){
    ballSpeedX = ballSpeedX * -1
  }

  if(ballY >= windowHeight -15 || ballY <=15 ){
    ballSpeedY = ballSpeedY * -1
  }

  //did we tag the ball, if so replace ball, add to score
  if(mouseCollide < 15){
    score++;
    ballX = random(15, windowWidth-15)
    ballY = random(15, windowHeight-15);
    ballSpeedX = ballSpeedX * 1.5;
    ballSpeedY = ballSpeedY * 1.5;
  }

  ellipse(ballX, ballY, 30, 30);

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
