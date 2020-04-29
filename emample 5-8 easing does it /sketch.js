
var easing = 0.01;
var x = 0;
function setup() {
  // put setup code here
  createCanvas(1280,700);
}

function draw() {
  var targetX = mouseX;
  x += (targetX - x) * easing;
  ellipse(x, 40, 12, 12);
  print(targetX + ":" + x);

  // put drawing code here
}
