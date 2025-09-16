// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup(){
  createCanvas(windowWidth,windowHeight);
  x = width / 2;
  rectMode(CORNER);
}

function draw(){
  background(135,0,0);
  fill(255,0,0);
  circle(mouseX,mouseY,80);
  noStroke();
  rect()
}

function quad(){
  fill(135,206,235);
  quad(20, 20, 80, 20, 80, 80, 20, 80);
  noStroke();
  rect();
}