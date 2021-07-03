class Paper{
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            density:1.2,
            friction:0.5,
            restitution:0.3
        }
        this.body = Bodies.circle(x,y,radius,options);   
        this.radius=radius;
        World.add(world, this.body); 
      }
  
      display(){     
        fill("yellow");
        ellipseMode(RADIUS);
        circle(this.body.position.x,this.body.position.y,this.radius);
      }
}