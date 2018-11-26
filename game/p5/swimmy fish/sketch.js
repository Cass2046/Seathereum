var creature={
    x:100,
    y:460,
};

var coral={
    x:300,
    y1:260,
    y2:-1,
    width:50,
    length1: 400,
    length2: 100,
};

var upteeth={
    x:20,
    y:290,
};

var downteeth={
    x:120,
    y:565,
};

function setup() {
    createCanvas(800, 600);
    //creature = new creature(200, 200, 40);
    //pipes.push(new pipes());
}

function draw() {
    // background color tutorial 1-7 map func
    // colorR=map(creature.x, 0, 600, 0, 200);
    // background(colorR/2, 120, 200);
    background(180, 190, 200);
    stroke(255);
    strokeWeight(3);
    fill(40, 120, 200);
    triangle(0, 0, 400, 0, 0, 270);
    triangle(400, 0, 800, 0, 800, 270);
    //eyes
    fill(20,50,60);
    triangle(168, 160, 225, 120, 320, 190);
    triangle(633, 160, 580, 120, 480, 190);

    //mouth
    fill(200, 30, 50);
    rect(upteeth.x-3, upteeth.y-3, 760, 280);
    
    //teeth
    fill(255);
    //upteeth
    triangle(upteeth.x, upteeth.y, upteeth.x+40, upteeth.y, upteeth.x+12, upteeth.y+80);
    triangle(upteeth.x+50, upteeth.y, upteeth.x+90, upteeth.y, upteeth.x+62, upteeth.y+90);

    //downteeth
    triangle(downteeth.x, downteeth.y, downteeth.x+40, downteeth.y, downteeth.x+12, downteeth.y-80);
    triangle(downteeth.x+100, downteeth.y, downteeth.x+160, downteeth.y, downteeth.x+140, downteeth.y-120);
    //upteeth.x=upteeth.x+100;

    //more upteeth
    for (var x=280; x<=780; x=x+110){
        fill(255);
        triangle(x, 290, x+40, 290, x+12, 390);
    }
    //more downteeth
    for (var y=320; y<=780; y=y+120){
        fill(255);
        triangle(y, 565, y+40, 565, y+12, 445);
    }


    
    //creature
    fill(110, 200, 90);
    ellipse(creature.x, creature.y, 20, 20);

    if (mouseIsPressed){
       creature.y=creature.y-5.5;
    }

    // fill (190,100,200);
    // triangle(100, -1, 160, -1, 120, 270);
    //triangle(200, 800, 260, 800, 220, 370);
    //rect(coral.x,coral.y1,coral.width,coral.length1);
    //rect(coral.x,-2,coral.y2,coral.width, coral.length2);

    creature.x=creature.x+1;
    creature.y=creature.y+1;

    coral.x=coral.x-1;
}