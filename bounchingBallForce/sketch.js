let ball;
let force;
function setup() {
	createCanvas(800, 600);
	ball = new Ball();
	windForce = createVector(0.01 , 0);
	gravity   = createVector(0,0.01);
}

function draw() {
	background('grey');
	ball.show();
	ball.update();
    //lets apply wind force
     ball.applyForce(windForce);
	//lets apply gravity force
	ball.applyForce(gravity);
	// lets make ball walk toward mouse
	 ball.applyForceTowardMouse();



}