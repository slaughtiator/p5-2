function setup() {
  // put setup code here
createCanvas(255,255);

}

function draw() {

for (var x = 0; x < 256; x++){
  stroke(x);
  line(0,x,width,x);
}



  // put drawing code here
}
