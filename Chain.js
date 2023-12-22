class Chain {
    constructor(bodyA, pointB) {
        var options = {  //json datastructure
            bodyA: bodyA,    //key-value pair
            pointB: pointB,
            stiffness: 0.04,
            length: 8
            
        }
        this.pointB = pointB
        this.Chain = Constraint.create(options)
        World.add(world, this.Chain)
        this.sling1 = loadImage("sling1.png")
        this.sling2= loadImage("sling2.png")
        this.sling3 = loadImage("sling3.png")

    }
    display() {
        image(this.sling1, 200, 20) 
        image(this.sling2, 170, 20)
        if(this.Chain.bodyA ) {
        var pointA = this.Chain.bodyA.position
        var pointB = this.pointB
        if(pointA.x < 220) {
          strokeWeight(5)
          line(pointA.x -20, pointA.y, pointB.x -10, pointB.y)
          line(pointA.x -20, pointA.y, pointB.x +30, pointB.y -3)
          image(this.sling3, pointA.x -30, pointA.y -10, 15, 30)
        }else{
            strokeWeight(3)
            line(pointA.x +25, pointA.y, pointB.x -10, pointB.y)
            line(pointA.x +25, pointA.y, pointB.x +30, pointB.y -3)
            image(this.sling3, pointA.x +25, pointA.y -10, 15, 30)
        }
        
        }

    }
    fly() {
        this.Chain.bodyA = null
    }
    attach(body){
        this.Chain.bodyA = body
    }

}



