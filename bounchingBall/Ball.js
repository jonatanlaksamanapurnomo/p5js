class Ball{
    constructor(){

        //we construct bounching ball in tradional way no vector
        this.x = width/2;
        this.y = height/2;
        this.r = 15;
        this.xSpeed = random(10,20);
        this.ySpeed = random(10,20);

    }

    show(){
        fill(random(0,255),random(0,255),random(0,255));
        ellipse(this.x , this.y , this.r);
    }

    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x <= 0 || this.x >= width){
            this.xSpeed*=-1;
        }
        if(this.y <= 0 || this.y >= height){
            this.ySpeed*=-1;
        }

    }
}