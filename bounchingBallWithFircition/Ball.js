class Ball{
    constructor(){
        this.localtion = createVector(width/2 , height/2);
        this.acc       = createVector();
        this.velocity  = createVector();
        this.force     = createVector();
        this.mass      = random(10,15);

    }

    show(){
        fill('0');
        ellipse(this.localtion.x , this.localtion.y , this.mass);
    }

    update(){


        this.velocity.add(this.acc);
        this.localtion.add(this.velocity);
        this.acc.mult(0);
    }

    applyForce(f){
        var force = f.div(this.mass);
        this.acc.add(force);

    }

    edge(){
        this.velocity.limit(10);
        if(this.localtion.x <= 0 || this.localtion.x >= width){
            this.velocity.x *= -5;
        }
        if(this.localtion.y <= 0 || this.localtion.y >= height){
            this.velocity.y *= -1.3;

        }
    }


}