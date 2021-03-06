class ground{
  constructor(x,y,width,height){
    var options ={
      //Cannot move
      isStatic:true
    }
    //Create a rectangle
    this.body=Bodies.rectangle(x,y,width,height,options);
    //Add it to the world
    World.add(world,this.body);
  }
  display(){
    //Create a pos variable
    var pos = this.body.position
    
    rectMode(CENTER);
    fill("brown");
    //Make a rectangle in the same place
    rect(pos.x,pos.y,2000,20);
  }
}