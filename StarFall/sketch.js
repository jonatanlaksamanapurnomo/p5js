var stars = [];
var len = 1000;
function setup() {
	createCanvas(1000, 800);
	for(var i = 0 ; i<len; i++){
		stars.push(new star());
	}
}

function draw() {
	background('black');
	translate(width/2 , height/2);
	for(var i = 0 ; i<stars.length ; i++){
		stars[i].show();
		stars[i].update();
	}

}