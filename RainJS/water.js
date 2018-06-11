function water(){

    //x pos is must seprate way so we random it
    this.x = random(0,width);
    //at the begin y pos we make it so wide so it feels like rain
    this.y = random(-height,height);

    this.longess = 0.8;


    this.show = function(){
        fill('white');
        ellipse(this.x , this.y , this.longess);

    }
    this.update = function(){
        this.y++;
        if(this.y>=height){
            //the second turn we turn y into 0 to make people think water come from sky not from background hehe
            this.y = 0;
            this.x = random(0,width);
        }
        //i want the water become more long , big when it hit near the surface
        this.longess = map(this.y , 0, height , 2 , 8);


    }
}