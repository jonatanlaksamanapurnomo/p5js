var ball ;
function setup() {
	createCanvas(600, 300);
	this.ball = new Ball();
}

function draw() {
	this.gravityForce = createVector(0,0.1);
	this.windForce    = createVector(0.1 , 0);
	// this.windForce2   = createVector(-0.1 ,0);
	background('grey');
	this.ball.show();
	this.ball.update();
	this.ball.edge();
	this.ball.applyForce(this.gravityForce.mult(this.ball.mass));
    this.ball.applyForce(this.windForce);




}

function mousePressed(){

    print('click');
}