let speed = 20;
let setbg = 0;
let pauseDuration = 1000;
let lastPauseTime = 0;
let isPaused = false;
let squareX, triangleX;
let squareTargetX, triangleTargetX;
let squareStep, triangleStep;
let img;
let sizeCircle = 0;
let sizeTri = 0;
let sizeStar = 0;
let sizeTri2 = 0;
let sizeCircle2 = 0;


function setup() {
   createCanvas(1280, 720);
   angleMode(DEGREES);
   frameRate(30);
   img = loadImage('cic.png');

   squareX = -width / 2;
   squareTargetX = width / 2;
   squareStep = (squareTargetX - squareX) / 10;
  
   triangleX = width + width / 3;
   triangleTargetX = width / 3;
   triangleStep = (triangleTargetX - triangleX) / 10;

}

function draw() {
    background("#FFCF05");
    noStroke();
    movebg();

    push();
    translate(squareX,0);
    noFill();
    stroke("#5BD6C0");
    strokeWeight(sizeCircle);
    circle(-170,200,20);
    pop();

    push();
    noFill();
    translate(squareX,0);
    translate(-700,350);
    rotate(-40);
    stroke("#FFCF05");
    strokeWeight(sizeTri);
    strokeJoin(ROUND);
    triangle(410,260,420,240,430,260);
    pop();

    push();
    noFill();
    translate(triangleX,0);
    stroke("#FFCF05");
    strokeWeight(sizeCircle2);
    circle(50,280,20);
    pop();

    push();
    noFill();
    translate(triangleX,0);
    translate(-550,210);
    rotate(-30);
    stroke("#5BD6C0");
    strokeWeight(sizeTri2);
    strokeJoin(ROUND);
    triangle(380,320,390,300,400,320);
    pop();

    push();
    noFill();
    translate(triangleX,0);
    stroke("#FFCF05");
    strokeWeight(sizeStar);
    ellipse(0,350,5,25);
    ellipse(0,350,25,5);
    pop();

    if (!isPaused) {
    if (setbg < 1440) {
      setbg += speed;
    } else {
      setbg = 0;
    }
  }

    if ((setbg === 720 || setbg === 1440) && !isPaused) {
    isPaused = true;
    lastPauseTime = millis();

     squareX = -width / 2;
     squareStep = (squareTargetX - squareX) / 10;

    
     triangleX = -width / 3;
     triangleStep = (triangleTargetX - triangleX) / 10;
  }

     if (isPaused && millis() - lastPauseTime >= pauseDuration) {
     isPaused = false;
  }

     fill(0);
     textSize(20);

     animateShapes();
}

 function animateShapes() {
    if (setbg === 720 && isPaused) {
    if (squareX < squareTargetX) {
    squareX += squareStep;
    } else {
        sizeCircle = 10;
        sizeTri = 6;
    }
    }
     if (setbg === 1440 && isPaused) {
    if (triangleX < triangleTargetX) {
        sizeCircle2 = 10;
        sizeTri2 = 6;
        sizeStar = 6;
    triangleX += triangleStep;
  }
  }

    push(); 
    translate(squareX, height / 2);
    imageMode(CENTER);
    image(img, 0, 0, 120, 100);
    
    noFill();
    stroke("#FFFFB3");
    strokeWeight(10);
    rectMode(CENTER);
    rect(0, 0, 200, 200); 
    rect(0, 0, 150, 150);
    pop();
 
  push();
  translate(triangleX , height / 6);
  noFill();
  stroke("#FFFFB3");
  strokeWeight(10);
  beginShape();
  vertex(200, 100);
  vertex(100, 300);
  vertex(300, 300);
  endShape(CLOSE);
  beginShape();
  vertex(200, 175);
  vertex(150, 275);
  vertex(250, 275);
  endShape(CLOSE);
  pop();
}

function movebg() {
  push();
  translate(0, 0 + setbg);

  fill("#5BD6C0"); // Cyan
  beginShape();
  vertex(150, 0);
  vertex(width, 0);
  vertex(width, height - 100);
  vertex(150, 0);
  vertex(width, 0);
  vertex(width, -620);
  endShape(CLOSE);

  fill("#FC6172"); // Pink
  beginShape();
  vertex(0, 0);
  vertex(width, height);
  vertex(0, height);
  vertex(0, 0);
  vertex(width, -height);
  vertex(0, -height);
  vertex(0, -height);
  vertex(width, -height);
  vertex(0, -1440);
  endShape(CLOSE);

  fill("#5BD6C0"); // Cyan
  beginShape();
  vertex(width, -820);
  vertex(150, -1440);
  vertex(width, -1860);
  endShape(CLOSE);

  pop();
}