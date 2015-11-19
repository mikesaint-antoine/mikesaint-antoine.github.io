var x = 0;



function setup() {
  createCanvas(600, 400);
  background(100);  
  line(15, 25, 70, 90);

}

function draw() {
    background(100);  
  ellipse(x, height/2, 20, 20);
  x = x + 1;
}