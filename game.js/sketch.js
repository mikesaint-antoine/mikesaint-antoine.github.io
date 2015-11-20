canvasWidth = 600;
canvasHeight = 400;

var block = 
{
  x:0,
  y:canvasHeight-30,
  w:150,
  h:28,
  
  display:function()
  {
    stroke(255);
    strokeWeight(1);
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  },
  move:function()
  {
    if (keyIsDown(LEFT_ARROW))
    {
      this.x = this.x -7;
    }
    else if (keyIsDown(RIGHT_ARROW))
    {
      this.x = this.x + 7;
    };
  }
  
  
};


var ball = 
{
  x:100, 
  y:30,
  diameter:30,
  dx:.5,
  dy:.1,
  
  display:function()
  {
    stroke(255);
    strokeWeight(0);
    fill(255);
    ellipse(this.x,this.y,this.diameter,this.diameter);
  },
  move:function()
  {
    if (this.x + this.diameter/2 >= canvasWidth)
    {
      this.dx = -1*this.dx;
      
    };
    if (this.x - this.diameter/2 <= 0)
    {
      this.dx = -this.dx;
    };
    this.x = this.x + this.dx; 
    
    
    if (this.y + this.diameter/2 >= block.y && ((this.x + this.diameter/2 - block.x <= block.w&& this.x + this.diameter/2 >= block.x)||(this.x - this.diameter/2 - block.x <= block.w&& this.x - this.diameter/2 >= block.x))) 
    {
      this.dx = (Math.random() * 3)-1.5;
      this.dy = -this.dy;
    }
    else
    {
      this.dy = this.dy + 0.35 ;
    };
    
    if (this.y >= canvasHeight + 200)
    {
      this.x = 100;
      this.y = 30;
      this.dx = .5;
      this.dy = .1;
    }
    
    
    this.y = this.y + this.dy;
  }
  
};




function setup() 
{
  createCanvas(canvasWidth, canvasHeight);
  background(100);  
  line(15, 25, 70, 90);
}



function draw() 
{
  background(100);  
  // ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  // circle.x = circle.x + 1;
  ball.display();
  ball.move();
  block.display();
  block.move();
  
}

