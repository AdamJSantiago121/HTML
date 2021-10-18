let x,y,b,g,r;

function setup(){
  createCanvas(600,400)
  background(0);

}
        


function draw(){
   line(mouseX,mouseY,0,600);
  x=random(0, 600);
  g=random(0,255)
  r=random(0,255)
  b=random(0,100);
  y=random(0,400);
  noStroke;
  fill(r,g,b,100)
  rect(random(0,600),random(0,400),random(0,250))
  circle(mouseX,mouseY,300)
  
 
  

  

  
}