//simple class that show how we can apply force in code
class Ball{
    constructor(){
        this.location = createVector(random(0,width) , random(0,height));
        this.velocity = createVector();
        this.acc      = createVector();

        this.mass     = random(1,4);
    }

    //i want create ball beside of his mass
    show(){
        fill('#93bcff');
        ellipse(this.location.x , this.location.y , this.mass*16);

    }


    //the elegant way to do force and acc you can see my prevous vector thats is not elegant hehehe
    update(){
        this.velocity.add(this.acc);
        this.location.add(this.velocity);
        this.edge();
        this.acc.mult(0);
    }

    //this is how we apply force we can apply to kind of force

    applyForce(f){
        // print(this.mass);

        var force = f.div(this.mass);
        this.acc.add(force);
    }


    edge(){
        if (this.location.x > width) {
            this.location.x = width;
            this.velocity.x *= -1;
        } else if (this.location.x < 0) {
            this.velocity.x *= -1;
            this.location.x = 0;
        }
        if (this.location.y > height) {
            this.velocity.y *= -1;
            this.location.y = height;
        }

    }
}
