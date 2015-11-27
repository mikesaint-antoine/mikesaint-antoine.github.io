  canvasWidth = 600;
  canvasHeight = 500;
  
  // originally 600x400

  colorOfStuff = '#000000'
  backgroundColor = '#90EE90'

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
      strokeWeight(0);
      fill(colorOfStuff);
      rect(this.x, this.y, this.w, this.h);
    },
    move:function()
    {
      if (keyIsDown(LEFT_ARROW))
      {
        this.x = this.x - 10;
      }
      else if (keyIsDown(RIGHT_ARROW))
      {
        this.x = this.x + 10;
      };
    }


  };


  function Ball()
  {
    this.x = 300
    this.y = 30;
    this.diameter = 30;
    this.dx = .5;
    this.dy = .1;

    this.display = function()
    {
      stroke(255);
      strokeWeight(0);
      fill(colorOfStuff);
      ellipse(this.x,this.y,this.diameter,this.diameter);
    }
    this.move = function()
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
        // original speed 0.35
      };
    this.y = this.y + this.dy;
    }
    
    
    this.reset = function()
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

  };



  function setup()
  {
    createCanvas(canvasWidth, canvasHeight);
    background(backgroundColor);
    ball = new Ball();
    ball2 = new Ball();
  }



  function draw()
  {
    background(backgroundColor);
    textSize(25);
    fill(colorOfStuff);
    text("score: " + score,10,30);
    text("high score: " + highScore,430,30);

    if (menu)
    {
    textSize(80);
    text("Time-Waster",80,170);
    textSize(20);
    text("Try to keep the balls in the air.",160,220);
    text("Use the left and right arrow keys to move.",120,245);
    text("Press any key to begin!",190,270);
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
      
      if (score>5)
      {
        ball2.display();
        ball2.move();
      }
      
      if (ball.y > canvasHeight + 200 || ball2.y > canvasHeight + 200)
      {
        ball.reset();
        ball2.reset();
        
      }

    }

  }
