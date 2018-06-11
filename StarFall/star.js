function star() {
    //just messing with random value duno how big / small the stars will appear
    this.x = random(-width , width);
    this.y = random(-height, height);
    this.z = random(width);
    this.r = random(0,15);
    //messing with speed so it looks like real the stars comin hehehe
    this.speed = random(0,15);
    //just meessing with random value duno what color will appear
    this.color = random(0,100);
    this.color2 = random(50,80);
    this.color3 = random(200,50);


    this.update = function(){
        this.z = this.z -this.speed;
        if(this.z<1){
            // print('is this happen');
            this.z = random(width);
            this.x = random(-width , width);
            this.y = random(-height, height);

        }

    }


    this.show = function(){
        fill(this.color,this.color2,this.color3);
        //lets make it blink blink i dunno how to said in english hahahaha in indonesia we said kerlap kerlip

        var sx = map(this.x / this.z , 0 , 1 , 0 , width);
        var sy = map(this.y / this.z , 0 ,1 , 0 , height);
        // print(sx + sy + 'test');

        // fill(this.color,this.color2,this.color3);
        noStroke();
        ellipse(sx , sy , this.r , this.r );
    }



}