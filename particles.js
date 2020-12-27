class Particles{
constructor(x,y,radius){
 var option={
restiitution:0.4
 }

 this.radius=radius;
this.body=Bodies.circle(x,y,this.radius,option);
this.colour=colour(random(0,255),random(0,255),random(0,255));

World.add(world,this,body);



}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
    fill(this.colour);
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y.this.radius,this.radius);
    pop()
}


}