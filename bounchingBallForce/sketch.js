let balls = [];
let force;

function setup() {
	createCanvas(800, 600);
	for(var i = 0 ; i<5 ; i++){
		balls.push(new Ball());
	}

	windStat = false;

}


//i need to redraw wind and gravity
//make sense right we got new wind and gravity force ever pixels

function draw() {
    windForce = createVector(0.1 , 0);
    gravity   = createVector(0,0.1);

	background('grey');
	for(var i = 0 ; i<balls.length ; i++) {
		balls[i].show();


        balls[i].update();
        //lets apply gravity force
        gravity.mult(balls[i].mass);
        balls[i].applyForce(gravity);

        //lets apply wind if we clicked

            balls[i].applyForce(this.windForce);

    }

}

