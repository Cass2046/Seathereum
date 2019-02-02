var cvs = document.getElementById("canvas");
var sf = cvs.getContext("2d");
cvs.style = "position:absolute; left: 20%";

/* 
/  load images
/*/
var creature = new Image();
var bg = new Image();
var plantNorth = new Image();
var plantSouth = new Image();

var grass = new Image();
var vine = new Image();
var ubrown = new Image();
var clover = new Image();
var redflower = new Image();
var leave = new Image();
var upa = new Image();
var upb = new Image();
var upc = new Image();
var upd = new Image();

//source path
creature.src = "pic/gost.gif";
bg.src = "pic/bg.jpeg";
plantNorth.src = "pic/upplant.png";
plantSouth.src = "pic/downplant.png";
grass.src = "pic/grass.png";
vine.scr = "pic/vine.png";
ubrown = "pic/upbrown.png";
clover = "pic/clover.png";
redflower = "pic/redflower.png";
leave = "pic/leave.png";
upa = "pic/upa.png";
upb = "pic/upa.png";
upc = "pic/upa.png";
upd = "pic/upa.png";

var gap = 90;
var constant;
var CX = 80;
var CY = 120;
var gravity = 1.2;
var score = 0;

/* 
/  load audio
*/
var jp = new Audio();
var scor = new Audio();

//audio source
scor.src = "bgm/score.mp3";


/*
* set space
*/
document.addEventListener("keydown",moveUp);

function moveUp(){
    CY = CY - 20;
    //jp.play();
}

/*
* barriers function and coordinates
*/ 
var barr = [leave, upa, upb, upc, upd, vine, ubrown];
//random pick a barrier from barr array
barr [Math.floor(Math.random() * barr.length)] = {
    x : Math.floor(Math.random() * cvs.width * 200),
    y : Math.floor(Math.random() * cvs.height * 100)
};

// function drawBarr(){
//     for (var i = 0; i < 750; i++){
//         sf.drawImage(barr, barr[i].x, barr[i].y);
//         console.log(barr[i].x);
//         barr[i].x--;
//     }

//     if(barr[i].x == 100){
//         barr.push({
//             x : Math.floor(Math.random() * 600),
//             y : Math.floor(Math.random() * 200) + Math.floor(Math.random() * 50)
//         });
//     }
// }


var plant = [];
plant[0] = {
    x : cvs.width,
    y : 0
};

/*
/ draw images
*/
function draw(){
    //background
    sf.drawImage(bg,0,0); 

    //plant
    for(var i = 0; i < plant.length; i++){
        constant = plantNorth.height + gap;
        sf.drawImage(plantNorth,plant[i].x,plant[i].y);
        sf.drawImage(plantSouth,plant[i].x,plant[i].y + constant);
        

        console.log(plant[i].x);
            // console.log(plant[i].height);
            // console.log(plant[i].width);
             
        plant[i].x--;
        
        if(plant[i].x == 90){
            //push new plant with random function
            plant.push({
                x : cvs.width - Math.floor(Math.random() *  10),
                y : Math.floor(Math.random() * 100) - Math.floor(Math.random() * 50)
            });
        }

        if(plant[i].x == 100){
            barr.push({
                x : Math.floor(Math.random() * 600),
                y : Math.floor(Math.random() * 200) + Math.floor(Math.random() * 50)
            });
        }
        /*
        * Game over rulea
        */
        
        //hit the plant
        if (CX + creature.width >= plant[i].x 
            && CY + creature.width <= plant[i].x + plantNorth.width
            && (CY < plant[i].y + plant[i].height || CY + creature.height > plant[i].y + constant)
            ){
                location.reload();
        }
        
        //touch the ground
        if(CY + creature.height > cvs.height - 8 ){
            location.reload();
        }
        
        /*
        * record the score
        */
        if(plant[i].x == 5){
            score++;
            scor.play();
        }
        
        
    }

    /*
    /  draw creature images
    */
    sf.drawImage(creature,CX,CY);
    
    CY += gravity;
    
    sf.fillStyle = "#000";
    sf.font = "20px Verdana";
    sf.fillText("Score : "+score,10,cvs.height-20);
    
    //callback func
    requestAnimationFrame(draw);
    
}

draw();




