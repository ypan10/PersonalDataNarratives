
let furby;

function preload(){
furby = loadImage('image/furby.png')


}



function setup(){
createCanvas(windowWidth, windowHeight);

for(let i = 0; i < 50; i=i+10){
  line(i, 0, i, windowHeight)
  print(i);
}

for(let i = 0; i < windowHeight; i=i+10){
  line(0, i, windowWidth, i)
}
for(let i = 0; i<100; i++){
  immage(furby, random(windowWidth), random(windowHeight), 20, 20)
  print(i)
}


}


function draw(){
  //background(0)

}
