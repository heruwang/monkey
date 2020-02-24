class banana{
  constructor(_xPos, _yPos, _rotation, _size){
  this.xPos = _xPos;
  this.yPos = _yPos;
  this.rotation = _rotation;
    this.size = _size;
  }
  
 display(){
  push();
  translate(this.xPos, this.yPos-this.size*5)
  rotate(this.rotation);
   scale(this.size);
  fill(231,195,47);
  strokeWeight(0.2);
  rect(width * .46-width * .39, width * .57-width * .57, width * .05, width * .20, width * .5);
  rect(width * .43-width * .39, width * .57-width * .57, width * .05, width * .19, width * .5);
  rect(width * .40-width * .39, width * .57-width * .57, width * .05, width * .15, width * .5);
  fill(225,231,47);
  rect(0, 0, width * .13, width * .05, width * .05);
  pop();
 }
  
  move(){
    
    
    this.rotation++;
    
    if(this.yPos<= height){
       this.yPos += 3;
    }else
    {
      this.yPos = 0;
    }
    
   
  }
}