var cvs = document.getElementById("canvas");
var sf = cvs.getContext("2d");
cvs.style = "position:absolute; left: 20%";

/* 
/  load images
/*/
var creature = new Image();
var bg = new Image();
var plantNorth = new Image();

var up1 = new Image();
var up2 = new Image();
var up3 = new Image();
var up4 = new Image();
var up5 = new Image();

var down1 = new Image();
var down2 = new Image();
var down3 = new Image();
var down4 = new Image();
var down5 = new Image();


//source path
creature.src = "pic/gost.gif";
bg.src = "pic/bg.jpeg";
plantNorth.src = "pic/upplant.png";

up1.src = "pic/up1.png";
up2.src = "pic/up2.png";
up3.src = "pic/up3.png";
up4.src = "pic/up4.png";
up5.src = "pic/up4.png";

down1.src = "pic/down1.png";
down2.src = "pic/down2.png";
down3.src = "pic/down3.png";
down4.src = "pic/down4.png";
down5.src = "pic/down5.png";

var gap = 90;
var constant;
var CX = 80;
var CY = 120;
var gravity = 1.2;
var score = 0;

/* 
/  load audio
*/
// var jp = new Audio();
// var scor = new Audio();

//audio source
//scor.src = "bgm/score.mp3";


/*
* set space
*/
document.addEventListener("keydown",moveUp);

function moveUp(){
    CY = CY - 20;
    //jp.play();
}

/*
* North Plant function and coordinates
*/

var up_barr = [up1, up2, up3, up4, up5];
//random pick a barrier from barr array
var up_plant = up_barr[Math.floor(Math.random() * 5)];

/*
* South Plant function and coordinates
*/ 

var down_barr = [down1, down2, down3, down4, down5];
//random pick a barrier from barr array
var down_plant = down_barr[Math.floor(Math.random() * 5)];

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
    x : cvs.width - 200,
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
        //sf.drawImage(plantNorth,plant[i].x,plant[i].y);
        //sf.drawImage(plantSouth,plant[i].x,plant[i].y + constant);
        sf.drawImage(down_plant, plant[i].x,plant[i].y + constant-30);
        sf.drawImage(up_plant, plant[i].x + 90, plant[i].y);

        console.log(plant[i].x);
             
        plant[i].x--;
        
        if(plant[i].x == 290){
            //push new plant with random function
            up_plant.push({
                x : cvs.width - Math.floor(Math.random() *  10),
                y : Math.floor(Math.random() * 100) - Math.floor(Math.random() * 50)
            });
        }

        if(plant[i].x == 100){
            down_plant.push({
                x : Math.floor(Math.random() * 600),
                y : Math.floor(Math.random() * 200) + Math.floor(Math.random() * 50)
            });
        }
        /*
        * Game over rule
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




