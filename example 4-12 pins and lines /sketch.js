function setup() {
  // put setup code here
  createCanvas(800,600);


}

function draw() {
  background(204);
  for (var x = 20; x < width; x += 20){
    for (var y = 20; y < height; y += 20){
      stroke(0);
      line(x,y,width/2,height/2);
      fill(100);
      ellipse(x,y,5,5);

    }
  }

  // put drawing code here
}
