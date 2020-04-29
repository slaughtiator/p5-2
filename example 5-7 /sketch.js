function setup() {
  // put setup code here
  createCanvas(1280,700);

}

function draw() {
  // put drawing code here

  var c = random(0,255);
  var d = random(0,255);
  var e = random(0,255);
  stroke(c,d,e);
  var weight = dist(mouseX,mouseY,pmouseX,pmouseY);
  strokeWeight(weight);
  line(mouseX,mouseY,pmouseX,pmouseY);
}
