canvasWidth = 600;
canvasHeight = 400;

score = 0;
highScore = 0;
newHighScore = false;
menu = true;


var block = 
{
  x:300,
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
      this.x = this.x -9;
    }
    else if (keyIsDown(RIGHT_ARROW))
    {
      this.x = this.x + 9;
    };
  }
  
  
};


var ball = 
{
  x:300, 
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
    
    
    if (this.y + this.diameter/2 >= block.y && this.y <= canvasHeight && ((this.x + this.diameter/2 - block.x <= block.w&& this.x + this.diameter/2 >= block.x)||(this.x - this.diameter/2 - block.x <= block.w&& this.x - this.diameter/2 >= block.x))) 
    {
      this.dx = random(-4,4);
      this.dy = -this.dy;
      score++;
      if (score > highScore)
      {
        highScore = score;
        newHighScore = true;
      }
    }
    else
    {
      this.dy = this.dy + 0.35 ;
    };
    
    if (this.y >= canvasHeight + 200)
    {
      this.x = 300;
      this.y = 30;
      this.dx = .5;
      this.dy = .1;
      score = 0;
      // if(newHighScore)
      // {
        
      // }
      newHighScore = false;
      menu = true;
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
  background('#AAAAAA');
  textSize(25);
  fill(255);
  text("score: " + score,10,30);
  text("high score: " + highScore,430,30);
  
  if (menu)
  {
  textSize(80);
  text("Time-Waster",80,170);
  textSize(20);
  text("Try to keep the balls in the air.",160,220);
  text("Use the left and right arrow keys to move.",120,245);
  text("Press any key to begin.",190,270);
  if (keyIsPressed)
  {
    menu = false;
  }
 
  }

  if (!menu)
  {
    ball.display();
    ball.move();
    block.display();
    block.move();
    
  }
  
}

