
var x = 0;
var y = 0;
var status = true;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    //make variables to start draw



}


function updatePosision(){


    var nextX , nextY;
    var ran = random(1);
    if(ran<0.01){
        nextX = 0;
        nextY = 0.16 *this.y;
    }
    else if ( ran < 0.86){
        nextX = 0.85 *this.x  + 0.04 *this.y;
        nextY = -0.04 * this.x + 0.85*this.y + 1.6;
    }
    else if ( ran < 0.93){
        nextX = 0.2*this.x  - 0.26*this.y;
        nextY = 0.23*this.x  + 0.22* this.y +1.6;
    }
    else {
        nextX = -0.15*this.x + 0.28*this.y;
        nextY = 0.26*this.x + 0.24*this.y + 0.44;
    }


    this.x = nextX;
    this.y = nextY;


}
function drawPoint(){
    stroke('green');

    px =  map(this.x , -2.2 , 2.7, 0 , width);
     py = map(this.y , 0, 10 , height , 0);
    strokeWeight(this.x);
    // print(px , py);
    point(px, py);

}

function draw() {

	if(this.status){
        for(var i = 0 ; i<10 ; i++) {

            // print(location.x);
			print(i);
            updatePosision();
            drawPoint();
        }
        this.status = false;


	}
	else{
		print('done');
	}





}