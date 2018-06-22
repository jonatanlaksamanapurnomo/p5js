function setup() {
	createCanvas(600, 600);
	background(0);
	//make variables to start draw
    x = 0;
    y = 0;
   
}


function updatePosision(){

	var nextX , nextY;
	var ran = random(1);
	if(ran<0.01){
		nextX = 0;
		nextY = 0.16 *y;
	}
	else if ( ran < 0.86){
        nextX = 0.85 *x  + 0.04 *y;
        nextY = -0.04 * x + 0.85*y + 1.6;
	}
	else if ( ran < 0.93){
		nextX = 0.2*x  - 0.26*y;
		nextY = 0.23*x  + 0.22* y +1.6;
	}
	else {
		nextX = -0.15*x + 0.28*y;
		nextY = 0.26*x + 0.24*y + 0.44;
	}


    x = nextX;
    y = nextY;


}
function drawPoint(){
    stroke('white');
    strokeWeight(4);
    px = map(x , -2.2 , 2.7, 0 , width);
    py = map(y , 0, 10 , height , 0);
    // print(px , py);
    point(px, py);

}

function draw() {
	for(var i = 0 ; i<10 ; i++) {


        updatePosision();
        drawPoint();
    }




}