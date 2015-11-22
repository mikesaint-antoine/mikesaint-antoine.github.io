

backgroundColor = 0;
black = true;
click = false;
function mouseClicked()
{

    click = true;

}



  var link =
  {
    linkX:700,
    linkY:100,


    display:function()
    {
      textSize(32);    
      fill('#90EE90');
      text("Time-Waster",this.linkX,this.linkY);

    },
    move:function()
    {

    }


  };


function setup()
{
  createCanvas(displayWidth, displayHeight);
  background(backgroundColor);
}

function draw() {
  background(backgroundColor);
  
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
  


  
}
