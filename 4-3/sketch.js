function setup() {
  // put setup code here
  createCanvas(480,400);

}

function draw() {
  background(204);
  line(0,0,mouseX,mouseY);
  line(0,height,mouseX,mouseY);
  line(mouseX,mouseY,width,0);
  line(mouseX,mouseY,width,height);
  fill(20);
  //fill(128, 255, 0);
  triangle(0,0,mouseX,mouseY,0,height);
  fill(26, 98, 163);
  triangle(0,0,width,0,mouseX,mouseY);
  fill(20,86,20);
  triangle(width,0,width,height,mouseX,mouseY);
  fill(20,20,86);
  triangle(0,height,mouseX,mouseY,width,height);

  fill(255);
  ellipse(mouseX,mouseY,40,40);
  ellipse(mouseX+100,mouseY,40,40);
  ellipse(mouseX-100,mouseY,40,40);
  ellipse(mouseX,mouseY+100,40,40);
  ellipse(mouseX,mouseY-100,40,40);

  //ellipse(width/4,height/2,40,40);
  //ellipse(width/4*3,height/2,40,40);

  // put drawing code here
}
