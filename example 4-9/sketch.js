function setup() {
  // put setup code here
  createCanvas(800,600);
  strokeWeight(5);

}

function draw() {
  background(204);
  for (var i = 1; i < 600; i += 20){
    line (i, 0, i +i/2,40);
    line (i+i/2,40,i,height);

  }


  // put drawing code here
}
