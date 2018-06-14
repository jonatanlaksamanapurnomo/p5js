class VectorBall{
    //making boucnhing ball with vector
    constructor(){
        this.location = createVector(width/2 , height/2);
        this.velocity = createVector(random(10,20) , random(10,20));
        this.r = 15;


    }
    show(){
        fill('black');
        ellipse(this.location.x , this.location.y , this.r);

    }
    update(){

        //this is tradional way to add vector
        // this.location.x += this.velocity.x;
        // this.location.y += this.velocity.y;

        //simply we can use add method in vector
        this.location.add(this.velocity);
        if(this.location.x  <= 0 || this.location.x >= width){
            this.velocity.x*= -1;

        }
        if(this.location.y <= 0 || this.location.y >= height){
            this.velocity.y*=-1;
        }

    }
}