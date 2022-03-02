
let squareNums = [25, 36, 49, 64, 81, 100];
let squarePos = 0;

function setup(){
createCanvas(windowWidth, windowHeight)


fill(200, 40, 100)
for(let i=0; i < squareNums.length; i++ ){
  squarePos += 40;
  rect(0, squarePos, squareNums[i], 20 );
  print(squarePos);
  text(str(squareNums[i]), squareNums[i], squarePos+10)
}



//ellipse(200, 200, squareNums[3], squareNums[5])
}

function draw(){


}
