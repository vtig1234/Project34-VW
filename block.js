class block{
  constructor(x,y,width,height){
    var options ={
      //Make it able to move
      isStatic:false
    }
    //Create a rectangle
    this.body=Bodies.rectangle(x,y,40,40,options);
    //Add it to the world
    World.add(world,this.body);
  }
  display(){
    //Create a pos variable
    var pos = this.body.position
    
    rectMode(CENTER);
    fill("green");
    //Make a rectangle in the same place
    if ((this.body.speed)<15){
      //Display it if the speed is under 15
      rect(pos.x,pos.y,60,60);
    }else{
      //Otherwise remove it from the world
      World.remove(world,this.body);
    }
  }
}