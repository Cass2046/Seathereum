var creature;
function creature() {
    this.y = height/2;
    this.x = 50;
    this.gravity = 0.7;
    this.lift =-4;
    this.velocity = 0;

    this.show = function(){
        fill(500);
        ellipse(this.x, this.y, 32, 32);
    }

    this.up = function() {
        this.velocity += -this.gravity*20;
        printLn(this.velocity);
    }

    this.update = function(){
        this.velocity += this.gravity;  //x+=y x=x+y
        this.velocity *=0.9;
        this.y += this.velocity;

        if (this.y > height){
            this.y =height;
            this.velocity=0;
        }
    }
}