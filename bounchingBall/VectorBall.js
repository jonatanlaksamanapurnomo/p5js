class VectorBall{
    //making boucnhing ball with vector
    constructor(){
        //a constructor for our object
        this.r = 15;
        this.location = createVector(width/2 , height/2);
       //for the first time set accelaration and velocity to 0 as we see in the real world
        this.acc = createVector();
        this.velocity = createVector();
        //a limit speed that we could have
        this.topSpeed =10;



    }
    show(){
        fill('black');
        ellipse(this.location.x , this.location.y , this.r);

    }
    update(){
        //make a random angle and make random acc for this random angle hehehe
         var angle = random(TWO_PI);
         this.acc = createVector(cos(angle) , sin(angle));

        //simply we can use add method in vector and veloctiy + acc this is what we saw in real world right
        this.velocity.add(this.acc);
        this.location.add(this.velocity);
        this.velocity.limit(this.topSpeed);
        if(this.location.x  <= 0 || this.location.x >= width){
            this.velocity.x*= -1;

        }
        if(this.location.y <= 0 || this.location.y >= height){
            this.velocity.y*=-1;
        }

    }
}