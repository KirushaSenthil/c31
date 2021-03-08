class Drops{
    constructor(x,y){
        
        this.body=Bodies.circle(x, y,10)
        this.x=x;
        this.y=y;
        this.r=10;
        console.log(this.body)
        World.add(world,this.body)
    }

display(){
    ellipseMode(CENTER);
    fill ("blue")
    ellipse(this.body.position.x,this.body.position.y, this.r,this.r)


   

}
update(){
    if(this.body.position.y>400){
        Matter.Body.setPosition(this.body,{x:random(0,1200),y:random(0,400)})
    }
}
}