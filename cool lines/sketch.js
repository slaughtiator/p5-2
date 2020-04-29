function setup() {
  // put setup code here
createCanvas(800,600);
strokeWeight(2);

}

function draw() {
  background(204);
  for ( var i = 20; i < 600; i += 5){
  line(i, i/8, (i/2 + i)*mouseX/360, height);
  }

  // put drawing code here
}
