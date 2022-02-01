
//stuff in setup runs once in your sketch
//only make one setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(141, 217, 240);
  rectMode(CENTER)
  print(windowWidth);
}

//stuff in draw runs over and over (60fps)
//only make 1 draw function
function draw() {
  background(141, 217, 240);
  noStroke();
  fill(64, 35, 6)
  rect(windowWidth/4, 530, 70, 350);

  stroke(16, 110, 38);
  strokeWeight(6)
  fill(14, 179, 25)
  ellipse(windowWidth/4, windowHeight/3, 300, 300);

  stroke(31, 29, 28);
  strokeWeight(10)
  fill(224, 59, 36)
  rect(windowWidth/1.4, 530, 300, 300);

  stroke(31, 29, 28);
  strokeWeight(10)
  fill(105, 98, 97)
  rect(windowWidth/1.4, 650, 40, 60);

  stroke(31, 29, 28);
  strokeWeight(10)
  fill(232, 226, 225)
  rect(windowWidth/1.3, 470, 80, 80);

  stroke(31, 29, 28);
  strokeWeight(10)
  fill(232, 226, 225)
  rect(windowWidth/1.52, 470, 80, 80);

  stroke(31, 29, 28);
  strokeWeight(10)
  fill(138, 27, 11)
  rect(windowWidth/1.25, 350, 40, 60);

  stroke(31, 29, 28);
  strokeWeight(10)
  fill(138, 27, 11)
  rect(windowWidth/1.25, 300, 70, 30);

  noStroke();
  fill(128, 120, 119)
  ellipse(windowWidth/1.2, 220, 80, 60);

  noStroke();
  fill(128, 120, 119)
  ellipse(windowWidth/1.15, 130, 100, 80);

  noStroke();
  fill(105, 235, 30)
  rect(100, 750, 10000, 130);

  print(windowWidth/4)
}
