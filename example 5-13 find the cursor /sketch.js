var x;
var offset = 10;
var y;
function setup() {
  // put setup code here
  createCanvas(1280,700);
  x = width/2;
  y = height/2;

}

function draw() {
  background(204);
  if (mouseX > x) {
    x += 3;
    offset = -10;
  }
  if (mouseX < x){
    x -= 3;
    offset = 10;
  }
  if (mouseY > y) {
    y += 3;

  }
  if (mouseY < y){
    y -= 3;

  }
  line(x,0,x,height);
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  line(mouseX, mouseY, mouseX + offset, mouseY+10);
  line(mouseX, mouseY, mouseX + offset*3, mouseY);

  line(0,y,width,y);

}
