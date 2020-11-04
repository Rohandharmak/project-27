class Roof{
    constructor(body1,body2){
       
   
       this.body=Bodies.rectangle(x,y,1200,200,options);
       this.width=1200;
       this.height=20;
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("Grey");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
   }  