const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var backgroundImg;
function preload(){
  getbgimg();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(450,380,900,20);
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(705,200,200,10);
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10= new Box(390,235,30,40);
    box11= new Box(420,235,30,40);
    box12= new Box(450,235,30,40);
    box13= new Box(360,195,30,40);
    box14= new Box(390,195,30,40);
    box15= new Box(420,195,30,40);
    box16= new Box(390,155,30,40);

    box17 = new Box(645,195,30,40);
    box18 = new Box(675,195,30,40);
    box19 = new Box(705,195,30,40);
    box20 = new Box(735,195,30,40);
    box21 = new Box(765,195,30,40);
    box22 = new Box(675,145,30,40);
    box23 = new Box(705,145,30,40);
    box24 = new Box(735,145,30,40);
    box25 = new Box(705,100,30,40);

   
   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);
   slingshot = new Slingshot(this.polygon,{x:100,y:200});
    
}

function draw() {
  //camera.zoom=camera.zoom+1
  if(backgroundImg){
    background(backgroundImg)
  }
  else {
    background("lightgreen");  
  }
  
  textSize(30)
  text("SCORE:"+score,width/2,30)
  //text(mouseX + "," + mouseY,mouseX,mouseY)
  Engine.update(engine);

ground.display();
stand1.display();
stand2.display();
fill ("yellow");
box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();
fill ("red");
box8.display();
box8.score();
box9.display();
box9.score();
box10.display();
box10.score();
box11.display();
box11.score();
box12.display();
box12.score();
fill ("darkgreen");
box13.display();
box13.score();
box14.display();
box14.score();
box15.display();
box15.score();
fill ("pink");
box16.display();
box16.score();
box17.display();
box17.score();
box18.display();
box18.score();
box19.display();
box19.score();
box20.display();
box20.score();
fill ("blue");
box21.display();
box21.score();
box22.display();
box22.score();
box23.display();
box23.score();
fill ("purple");
box24.display();
box24.score();
box25.display();
box25.score();

circle(polygon.position.x,polygon.position.y,40)
slingshot.display();
 drawSprites();
}

function mouseDragged(){ 
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY}); 
}

function mouseReleased(){ 
  slingshot.fly(); 
}
async function getbgimg(){
  var responce = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
var responceJSON = await responce.json();
console.log(responceJSON);
var datetime = responceJSON.datetime;
console.log(datetime); 
var hour = datetime.slice(11,13);
console.log(hour); 
if(hour>=06 && hour<=14){
    bg = "skyday.jpeg";
}
else{
    bg = "night.jpg";
}
backgroundImg = loadImage(bg);
}
