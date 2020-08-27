class Stone{
    constructor(x,y,r){

        var options={
            isStatic=false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,r,options);

       
    }

    display(){
        var stonePos = this.body.position;
        push()
        translate(stonePos, this.body.position.y);
        rectMode(CENTER)
        strokeWeight(4);
        
        ellipse(0,0,this.r, this.r);
        pop()

    }
}