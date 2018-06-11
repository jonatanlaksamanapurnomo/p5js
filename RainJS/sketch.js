var rain = [];

function setup() {
	// createCanvas(windowWidth, windowHeight);
	createCanvas(800,500);
	for(var i = 0 ; i<500 ; i++){
		this.rain.push(new water());
	}
}

function draw() {
	background('#9de0f7');
	for(var i = 0 ; i<this.rain.length ; i++){
		this.rain[i].show();
		this.rain[i].update();
	}


}