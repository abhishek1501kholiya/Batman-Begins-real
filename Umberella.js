class Umberella {
    constructor(x,y,r){
        var options = {
            isStatic : true,
            'restitution': 0, 
            friciton : 0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x , y , r,options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Untitled.png");
        World.add(world,this.body);
    }
    display(){
       push();
       translate(this.body.position.x, this.body.position.y);
       imageMode(CENTER);
       image(this.image,0,0,200,200)
       pop();
    }
}