    class Ground {
        constructor(x,y,width,height) {
          var options = {
              isStatic: true,
              density:1
          }
          this.ground = Bodies.rectangle(x,y,width,height,options);   
          this.width=width ;
          this.height=height;
          World.add(world, this.ground);
        }
    
        display(){     
          var groundPos=this.ground.position;
          push();
          translate(groundPos.x, groundPos.y);
          rectMode(CENTER);
          strokeWeight(4);
          fill(255,255,0);
          rect(0,0,this.w, this.h);
          pop(); 
        }
      }
