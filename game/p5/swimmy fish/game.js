//P5 JS framework 
var creature;
var pipes = [];
function setup() {
    createCancas(600, 800);
    creature = new creature();
    pipes.push(new pipes());
}

function draw() {
    background(100);

    for (var i =pipes.length-1; i>=0; i--){
        pipes[i].show();
        pipes[i].update();
        if (pipe[i].hits(creature)) {
            console.log("HIT");
        }
        if (pipe[i].offcsreen()) {
            pipes.splice(i, 1);
        }
    }

    creature.update();
    creature.show();

    if (frameCount %70 == 0){
        pipes.push(new pipes());
    }

    
}

function keyPressed() {
    if (key == ' ' ) {
        creature.up();
        //console.log("1");
    }
}
