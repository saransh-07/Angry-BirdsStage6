class SlingShot{
    constructor(bodyA,pointB){
     var options={
         bodyA:bodyA,
         pointB:pointB,
         length:10,
         stiffness:0.1
     }
     
     this.sling = Constraint.create(options);
     this.pointB=pointB;
     this.sling1 = loadImage("sprites/sling1.png");
     this.sling2 = loadImage("sprites/sling2.png");
     this.sling3 = loadImage("sprites/sling3.png");
     World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        
        var pointB = this.pointB;
        stroke(48,22,8);
        strokeWeight(4);
        imageMode(CENTER);
        if(pointA.x<=pointB.x){
        line(pointA.x-20,pointA.y,pointB.x-35,pointB.y);
     line(pointA.x-20,pointA.y,pointB.x+8,pointB.y);
     image(this.sling3,pointA.x-25,pointA.y,15,30);
     }else{
        image(this.sling3,pointA.x+25,pointA.y-10,15,30);
        line(pointA.x-20,pointA.y,pointB.x-35,pointB.y);
     line(pointA.x-20,pointA.y,pointB.x+8,pointB.y);
     }
        }
        imageMode(CENTER);
        image(this.sling1,220,100);
        image(this.sling2,195,59);
    }
}
