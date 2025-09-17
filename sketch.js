// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup(){
  createCanvas(windowWidth,windowHeight);
  x = 300;
  y = 300;
  c = color(200,0,0);
}

function draw(){
  //mountains
  fill(100,100,100);
  ellipse(1000,height-150,2500,750);
  ellipse(250,height-30,2500,700);
  //green ground
  fill(34,139,34);
  rect(0, height-70, width, 80);
  //sun
  fill(255,255,0);
  ellipse(120,100,200,200);
  //moving character
  fill(c);
  ellipse(x,y,10,20);
  rect(x-10.5,y,20,30);
}
