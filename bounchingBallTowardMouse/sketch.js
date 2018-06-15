// var bola;
var vectorBola;

function setup() {
	createCanvas(800, 600);
	// this.bola = new Ball();
	this.vectorBola = new VectorBall();
}

function draw() {
	background('grey');
	// this.bola.show();
	this.vectorBola.show();
	// this.bola.update();
	this.vectorBola.update();
	// this.crashBall();


}

//just a simple function to make it real if it crash between to ball hehehe
function crashBall(){
	var distA = dist(this.bola.x , this.bola.y , this.vectorBola.location.x , this.vectorBola.location.y);
	// print(distA + " "+ this.vectorBola.r + " ");
	if(distA <= this.vectorBola.r){
		this.bola.xSpeed*=-1;
		 this.bola.ySpeed*=-1;
		this.vectorBola.velocity.x*= 1;
		 this.vectorBola.velocity.y*=1;
		// print('nabrak');
	}
}