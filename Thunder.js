class Thunder{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            'restitution': 0
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.w =width ;
        this.h = height;
        World.add(world,this.body);

        
    }
    display(){
        push();
        rectMode(CENTER);
        rect(this.x , this.y ,this.width, this.height);
        pop();
    }
}