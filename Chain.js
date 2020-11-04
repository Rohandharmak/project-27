class Chain{
    constructor(body1, body2,offsetx,offsety)
    {
        var options = {
    
            this.offsetx=offsetx,
            this.offsety=offsety,
            
                bodyA:body1,
                bodyB:body2,
                pointB:{x:this.offsetx, y:this.offsetx}
            }
            this.chain=Constraint.create(options);
            World.add(world,this.chain);
        }

    

    //fly(){
       // this.sling.bodyA = null;
   // }

    display(){
       // if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
      //  }
    }
}
    
