function setup() {
  // put setup code here
  createCanvas(800,600);



}

function draw() {
  background(200);
  if(mouseIsPressed){
    fill(0);
  }
  else {
    fill(255);
  }
  ellipse(mouseX,mouseY,80,80);

  // put drawing code here
}
