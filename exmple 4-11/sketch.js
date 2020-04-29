function setup() {
  // put setup code here
  createCanvas(480,120);
  noStroke();
}

function draw() {
  background(0);
  for (var y = 0; y < height; y+= 40){
      fill(255,140);
      ellipse(0,y,40,40);
  }
  for (var x = 0; x < width; x+=40){
    fill(255,140);
    ellipse(x,0,40,40);
  }

  // put drawing code here
}
