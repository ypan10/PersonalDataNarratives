var num = 20;

var x = [];

var y = [];
let appleSpeed = [];

var apple;

var pig;

var pigX = 400;
var pigY = 585;

var pigXspeed = 2;

var pigOink;

var cloud;
var night;
var tree;
var light;

var timer = 0;


function preload(){
  pig = loadImage('images/pig.gif');
  apple = loadImage('images/apple.png');
  pigOink = loadSound('audio/pigOink.mp3')
  cloud = loadImage('images/cloud.gif')
  night = loadImage('images/night.gif')
  tree = loadImage('images/tree.png')
  light = loadImage('images/light.png')

}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('z-index', '-1');
	canvas.position(0,0);

	imageMode(CENTER);
}


function draw(){
	push();
	imageMode(CORNERS);
  if(keyIsPressed == true){
    background(7, 5, 41)
  }else{
    background(157, 172, 234)
  }
	pop();

  if(keyIsPressed == true){
    image(night, 720, 150, windowWidth, 260)
  }else{
    image(cloud, 720, 150, windowWidth, 260)
  }

  if(keyIsPressed == true){
    noStroke();
    fill(13, 79, 42)
    rect(1, 700, 10000, 180);
  }else{
    noStroke();
    fill(25, 207, 70)
    rect(1, 700, 10000, 180);
  }

  noStroke();
  fill(25, 207, 70)
  ellipse(1040, 725, 400, 50)

  if(keyIsPressed == true){
    image(light, 1200, 520, 300, 480)
  }else{
    image(tree, 1200, 540, 280, 350)
  }

	for(var i = 0; i < x.length; i++){
		image(apple, x[i], y[i], 70, 70);
			y[i] = y[i]+appleSpeed[i]

		if(dist(pigX, pigY, this.x[i], this.y[i]) < 90){
			x.splice(i, 1);
			y.splice(i, 1);
			pigOink.play();

		}
	}


  	if (millis() - timer >= 10000){

	    if(x.length>0){
	    	x.splice(0,1);
	    	y.splice(0,1);
	  	}


    	timer = millis();
  	}


	image(pig, pigX, pigY, 300, 300);


	pigX = pigX + pigXspeed;


	if(pigX >= windowWidth+150){
		pigX = -150;
	}
}


function mouseReleased(){
	x.push(mouseX);
	y.push(mouseY);
	appleSpeed.push(random(2,3));
	ellipse(apple, mouseX, mouseY, 20, 10);

	}
