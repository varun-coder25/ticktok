var hr;
var sc ;
var mn;
var scAngle,mnAngle,hrAngle;
function setup() {

  createCanvas(800,400);
  
}

function draw() {

  background(0);
  translate(200,200);
  rotate(-90);
  
  hr = hour();
  sc = second();
  mn = minute();
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  line(0,0,100,0);
  pop();


  push();
  rotate(mnAngle);
  stroke(0,255,0);
  line(0,0,75,0);
  pop();


  push();
  rotate(hrAngle);
  stroke(0,0,255);
  line(0,0,50,0);
  pop();
  drawSprites();
}