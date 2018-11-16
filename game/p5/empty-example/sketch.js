//P5 JS framework 
//let creature;
//var pipes = [];
// var color;

function setup() {
    createCanvas(600, 400);
    //creature = new creature(200, 200, 40);
    //pipes.push(new pipes());
}

function draw() {
    // color=map(creature.x,0,600,255)
    // background(color);
    background(250, 250, 100);
    fill(250, 200, 200);
    ellipse(60, 120, 20, 40);
    // for (var i =pipes.length-1; i>=0; i--){
    //     pipes[i].show();
    //     pipes[i].update();
    //     if (pipe[i].hits(creature)) {
    //         console.log("HIT");
    //     }
    //     if (pipe[i].offcsreen()) {
    //         pipes.splice(i, 1);
    //     }
    // }

    //creature.update();
    // creature.move();
    // creature.show();

    // if (frameCount %70 == 0){
    //     pipes.push(new pipes());
    // }

}
// class creature {
//     constructor (x, y, v){
//         this.x = x;
//         this.y = y;
//         this.v = v;
//     }

//     move(){
//         this.x = this.x + random(-15, 15);
//         this.y = this.y + random(-15, 15);
//     }

//     show(){
//         stroke(255);
//         strokeWeight(5);
//         fill(255, 0, 100, 50);
//         ellipse(this.x, this.y, this.v*2);
//     }
// }

// function keyPressed() {
//     if (key == ' ' ) {
//         creature.up();
//         //console.log("1");
//     }
// }