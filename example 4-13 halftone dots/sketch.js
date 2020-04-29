function setup() {
  // put setup code here
  createCanvas(800,175);
}

function draw() {
  background(204);
for (y = 32; y <= height; y += 8){
  for (x = 12; x <= width; x += 15){

      fill(255);
      ellipse(x + y, y, 16 - y/10, 16-y/10);

    }
  }

  // put drawing code here
}
