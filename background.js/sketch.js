

backgroundColor = 0;
black = true;
click = false;


function mouseClicked()
{

    click = true;

}

// if (second == 0 || second == 20 || second == 40)
// {
//   click = true;
// }





  var link =
  {
    down:true,
    linkY:100,


    display:function()
    {
      textSize(25);    
      fill('#90EE90');
      stroke('#90EE90')
      text("naked pics link",displayWidth-200,this.linkY);
      line(displayWidth-200,this.linkY+2,displayWidth-37,this.linkY+2);




    },
    move:function()
    {
      
      if (this.linkY >= 450)
      {
        this.down = false;
      }
      else if (this.linkY <=99)
      {
        this.down = true;
      }
      
      if (mouseX > displayWidth-250 && abs(mouseY - this.linkY) < 100 && this.down)
      {
        this.linkY += 14;
      }
      
      else if (mouseX > displayWidth-250 && abs(mouseY - this.linkY) < 100 && !this.down)
      {
        this.linkY -= 14;
      }
      
      
      

    }


  };
  











function setup()
{
  createCanvas(displayWidth*1.2, displayHeight*7.8);
  background(backgroundColor);
}

function draw() {
  background(backgroundColor);
  
  if (second()==15)
  {
    click = true;
  }
  
  if (click && black && backgroundColor <=254)
  {
    backgroundColor +=2;
  }
  else if (click && !black)
  {
    backgroundColor -= 2;
  }
  if (backgroundColor >= 255)
  {
    click = false;
    black = false;
  }
  else if (backgroundColor == 0)
  {
    click = false;
    black = true;
  }
  
  link.display()
  link.move()
  



  
}
