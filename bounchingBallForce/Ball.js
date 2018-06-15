//simple class that show how we can apply force in code
class Ball{
    constructor(){
        this.location = createVector(width/2 , height/2);
        this.velocity = createVector();
        this.acc      = createVector();
        this.r        = 15;
        this.mass     = 10;
    }

    show(){
        fill('black');
        ellipse(this.location.x , this.location.y , this.r);

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
        this.acc.add(f);
        this.acc.mult(this.mass);
    }

    //just for fun and i make eviroment to play and we can now what is actually happen in this pixels word
    //that ball will try follow pointer
    applyForceTowardMouse(){
        // translate(width/2,height/2);
        var mouse = createVector(mouseX , mouseY);
        mouse.sub(this.location);
        this.acc =mouse;
        this.acc.setMag(0.2);
        // line(this.location.x , this.location.y,mouse.x, mouse.y);

    }

    edge(){
        if(this.location.x <= 0 || this.location.x >= width){
            this.velocity.x *= -1;
        }
        if(this.location.y <= 0 || this.location.y >= height){
            this.velocity.y *= -1;
        }
    }
}