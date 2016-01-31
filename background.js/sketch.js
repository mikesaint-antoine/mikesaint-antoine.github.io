

backgroundColor = 0;
black = true;
click = false;


function mouseClicked()
{

    click = true;

}















function setup()
{
  createCanvas(displayWidth*1.15, displayHeight*7.2);
  background(backgroundColor);
}

function draw() {
  background(backgroundColor);
  
  

  
  link.display()
  link.move()
  

  
}








  // commented out background fade
  // if (second()==30)
  // {
  //   click = true;
  // }
  
  // if (second()==0)
  // {
  //   click = true;
  // }
  
  
  // if (click && black && backgroundColor <=254)
  // {
  //   backgroundColor +=2;
  // }
  // else if (click && !black)
  // {
  //   backgroundColor -= 2;
  // }
  // if (backgroundColor >= 255)
  // {
  //   click = false;
  //   black = false;
  // }
  // else if (backgroundColor == 0)
  // {
  //   click = false;
  //   black = true;
  // }
