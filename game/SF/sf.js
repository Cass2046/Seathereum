var cvs = document.getElementById("canvas");
var sf = cvs.getContext("2d");
cvs.style = "position:absolute; left: 16%";

/* 
/  load images
/*/
var creature = new Image();
var bg = new Image();

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

var shark = new Image();
var shell = new Image();


//source path
creature.src = "pic/gost.gif";
bg.src = "pic/bg.jpeg";
shark.src = "pic/shark.png";
shell.scr = "pic/shell/png"; //102

up1.src = "pic/up1.png"; //w91 h311
up2.src = "pic/up2.png"; //52, 170
up3.src = "pic/up3.png"; //84, 270
up4.src = "pic/up4.png"; //93, 311

down1.src = "pic/down1.png"; //w138 h180
down2.src = "pic/down2.png"; //123, 198
down3.src = "pic/down3.png"; //135, 199
down4.src = "pic/down4.png"; //121, 199
down5.src = "pic/down5.png"; //140, 205

var gap = 140;
var constant;
var CX = 80;
var CY = 120;
// var SX = ;
// var SY = ;
var gravity = 1.2;
var score = 0;
var s = 60;

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
    CY = CY - 26;
    //jp.play();
}

/*
* North Plant function and coordinates
*/
var up_barr = [up1, up2, up3, up4, up4, up1, up2, up3, up4, up1];
//random pick a barrier from barr array
var up_plant = up_barr[Math.floor(Math.random() * 10)];
var up_pos = [];
up_pos[0] = {
    x : cvs.width - 120,
    y : -35,
    i : Math.floor(Math.random() * 5)
};

/*
* South Plant function and coordinates
*/ 
var down_barr = [down1, down2, down3, down4, down5, down1, down2, down3, down4, down5];
// var down_barr = [down3, down3, down3, down5, down5, down5, down5, down5, down5, down5];
//random pick a barrier from barr array
var down_plant = down_barr[Math.floor(Math.random() * 10)];
var down_pos = [];
down_pos[0] = {
    x : cvs.width - 160
};

var upplant = [];
upplant[0] = {
    x : cvs.width,
    y : 0
};
var s = [];
s[0] = {
    x :cvs.width,
    y : 300  
};
// var dplant = [];
// dplant[0] = {
//     x : cvs.width,
//     y : cvs.height - 300         
// };

// function render(){

// };
// setInterval(function(){

// }, 1000/s);
/*
/ draw images
*/
function draw_up(){
    //background
    sf.drawImage(bg,0,0); 

    //plant
    for(var i = 0; i < upplant.length; i++){
        //test draw plants
        constant = up_plant.height + gap;
        sf.drawImage(
            up_plant, upplant[i].x, upplant[i].y
            );
        // sf.drawImage(
        //     down_plant, plant[i].x, plant[i].y + constant
        //     );
        upplant[i].x--;
        
        //var timer = setTimeout(callShark, 3000);
        // function callShark(){
        //     sf.drawImage(
        //         shark, Math.floor(Math.random()*100), Math.floor(Math.random()*)
        //         );
        // }

        if (upplant[i].x == 200){
            console.log(up_plant.width, up_plant.height)
            upplant.push(
                {
                    x : cvs.width,
                    y : Math.floor(Math.random()*up_plant.height) - up_plant.height
                }
            );
        }
    
        /*
        * Game over rule
        */
        if ((CX + creature.width >= upplant[i].x 
            && CX <= upplant[i].x + up_plant.width
            && CY <= upplant[i].y + up_plant.height)
            || CY + creature.height > cvs.height - 8 //touch the ground
            ){
                windown.location.href = 'google.com';
                location.reload();
        }
        
        /*
        * record the score
        */
        if(upplant[i].x == 15){
            score++;
            //scor.play();
        }
    }

    /*
    /  draw creature images
    */
    sf.drawImage(creature,CX,CY);
    
    CY += gravity;
    
    sf.fillStyle = "#000";
    sf.font = "32px Verdana";
    sf.fillText("Score : "+score,10,cvs.height-20);
    
    //callback func
    requestAnimationFrame(draw_up);
}
draw_up();
 
// function draw_down(){
//     sf.drawImage(bg,0,0); 
//     for(var i = 0; i < dplant.length; i++){
//         sf.drawImage(
//             down_plant, dplant[i].x, dplant[i].y + gap
//             );
//         dplant[i].x--;
//         if (dplant[i].x == 110){
//             //console.log(up_plant.width, up_plant.height)
//             console.log(down_plant.x, down_plant.y)
//             dplant.push(
//                 {
//                     x : cvs.width + 20,
//                     y : 150 + Math.floor(Math.random()* 100)
//                 }
//             );
//         }

//         if (CX + creature.width >= dplant[i].x 
//             && CX < dplant[i].x + down_plant.width 
//             && CY > sf.height - down_plant.height){
//                 console.log("touch the downplant at", down_plant.x, down_plant.y);
//             location.reload();
//         }
        
//         if(CY + creature.height > cvs.height - 8 ){
//             location.reload();
//         }

//         if(dplant[i].x == 150){
//             score++;
//             //scor.play();
//         }
//     }
//     /*
//     /  draw creature images
//     */
//    sf.drawImage(creature,CX,CY);
    
//    CY += gravity;
   
//    sf.fillStyle = "#000";
//    sf.font = "32px Verdana";
//    sf.fillText("Score : "+score,10,cvs.height-20);
   
//    //callback func
//    requestAnimationFrame(draw_down);
// }





