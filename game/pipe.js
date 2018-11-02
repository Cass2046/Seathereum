function Pipe() {
    this.top = random (height/2);
    this.bottom = random (height/2);
    this.x = width;
    this.w=20;
    this.speed =1.5;
    
    this.heightlight = false;

    this.hits=function(creature){
        if (creature.y < this.top || creature.y > height-this.bottom){
            if (creature.x > this.x && creature.x < this.x+this.w){
                this.heightlight=true;
                return true;
            }
        }
        this.heightlight=false;
        return false;
    }

    this.show = function(){
        fill(300);
        if (this.heightlight){
            fill(255,0,0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w. this.bottom);
    }

    this.update = function () {
        this.x -=this.speed;
    }

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        }
        else {
            return false;
        }
    }
}