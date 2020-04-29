
var x = 20;
var y = 222;
function setup() {
  // put setup code here
createCanvas(800,600);
}

function draw() {
  background(204);
  ellipse(x, mouseY, 20, 20);
  ellipse(x+40,mouseY/2+40,20,20);
  ellipse(x+80,mouseY/3+80,20,20);
  ellipse(x+120,mouseY/4+120,20,20);

}
