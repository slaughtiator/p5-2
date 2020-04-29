

function setup() {

  // put setup code here
  createCanvas(1280,700);
  strokeWeight(30);

}

function draw() {
  // put drawing code here
  var z = random(0,700);
  var zz = random(0,1280);
  background(204);
  stroke(102);
  line(0,z,z,height);
  if(mouseIsPressed){
    stroke(0);
  } else {
    stroke(255);
  }
  line(zz,0,width,zz);

}
