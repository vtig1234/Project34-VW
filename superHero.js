 class superHero{
   constructor(x,y,diameter){
     var options={
       //Make it able to move
       isStatic:false,
       frictionAir:0.1,
       density:1
     }
     //Create a circle
     this.body=Bodies.circle(x,y,20,options);
     this.image = loadImage("Superhero-01.png");
     //Add it to the world
     World.add(world,this.body);
  }
   
   display(){
     //Create a variable for the position of the body
     var pos = this.body.position
     rectMode(CENTER);
     fill(255);
     //Make a circle following the body
     image(this.image,pos.x,pos.y,200,100)
     // circle(pos.x,pos.y,20);
   }
 }


