var creature={
    x:50,
    y:120,
    // this.y = height/2,
    // this.x = 50,
    // this.gravity = 0.7,
    // this.lift =-4,
    // this.velocity = 0,
};

function setup() {
    createCanvas(800, 600);
    //creature = new creature(200, 200, 40);
    //pipes.push(new pipes());
}

function draw() {
    // background color tutorial 1-7 map func
    colorR=map(creature.x, 0, 600, 0, 200);
    background(colorR/2, 120, 180);
    
    //colorG=map(creature.y, );
    fill(180, 20, 90);
    ellipse(creature.x, creature.y, 35, 40);

    if (mouseIsPressed){
       creature.y=creature.y-9;
    }

    fill (100,200,100);
    rect(120,180,50,500);
    rect(120,-2,50,80);

    creature.x=creature.x+3;
    creature.y=creature.y+2.7;

   
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