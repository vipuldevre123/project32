class Box{
    constructor(x,y,width,height){
    var options = {
    restitution:0.1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visiblity = 255;
    World.add(world,this.body);
    
        }
        
        
display()
{
console.log(this.body.speed);
 if(this.body.speed <3)
{ var angle = this.body.angle; var pos= this.body.position; 
push(); 
translate(pos.x, pos.y); 
rotate(angle); 
rectMode(CENTER); 
rect(0,0,this.width, this.height); 
pop(); 
}
else{ World.remove(world, this.body); 
push(); this.visiblity = this.visiblity -5; pop(); 
} 
   } 
score(){
if(this.visiblity<0 && this.visiblity>=-500){
score = score+1;
   }
}
}