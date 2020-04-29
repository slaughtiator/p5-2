function setup() {
  // put setup code here
createCanvas(800,600);
strokeWeight(3);

}

function draw() {
  background(204);
  for ( var i = 8; i < 600; i += 8){
  line(i, i/8+mouseY, (i/2 + i)*mouseX/360, 3/4*height);
  }

  // put drawing code here
}
