class VectorBall{
    //making boucnhing ball with vector
    constructor(){
        this.location = createVector(width/2 , height/2);
        this.acc = createVector();
        this.velocity = createVector();
        this.topspeed =10;
        this.r = 15;


    }
    show(){
        fill('black');
        ellipse(this.location.x , this.location.y , this.r);

    }
    update(){
        // Compute a vector that points from position to mouse
        var mouse = createVector(mouseX,mouseY);
        mouse.sub(this.location);
        this.acc = mouse;
        // Set magnitude of acceleration
        this.acc.setMag(0.2);

        this.velocity.add(this.acc);
        this.velocity.limit(this.topspeed);
        this.location.add(this.velocity);
        if(this.location.x  <= 0 || this.location.x >= width){
            this.velocity.x*= -1;

        }
        if(this.location.y <= 0 || this.location.y >= height){
            this.velocity.y*=-1;
        }

    }
}