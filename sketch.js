var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(1900,900);

  // to use angle in degrees
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(950,500);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  //To create ab iterative rotation 
  scAngle = map(sc, 0, 60, 0, 360); 
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  push()
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  pop();

  push()
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  pop();

  push()
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  pop();

  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,450,450,0,scAngle);

  stroke(0,255,0);
  arc(0,0,350,350,0,mnAngle);

  stroke(0,0,255);
  arc(0,0,250,250,0,hrAngle);
}