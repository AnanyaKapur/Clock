function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  translate(200,200)
  rotate(-90)

  let hr=hour()
  let mn= minute()
  let sc=second()

  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  let secondAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,secondAngle);

  stroke("yellow");
  let minuteAngle=map(mn,0,60,0,360)
  arc(0,0,280,280,0,minuteAngle);

  stroke("blue");
  let hourAngle=map(hr % 12,0,12,0,360);
  arc(0,0,260,260,0,hourAngle);

  push();
  rotate(secondAngle);
  stroke(255,100,150)
  line(0,0,100,0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("yellow");
  line(0,0,75,0);
  pop();

  push();
  rotate(hourAngle);
  stroke("blue");
  line(0,0,50,0)
  pop();

  stroke(255);
  point(0,0);

  drawSprites();
}