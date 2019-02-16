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

var grass = new Image();
var root = new Image();
var leave = new Image();


//source path
creature.src = "pic/gost.gif";
bg.src = "pic/bg.jpeg";

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

grass.src = "pic/grass.png";
root.src = "pic/root.png";
leave.src = "pic/leave.png";

var gap = 100;
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
    CY = CY - 26;
    //jp.play();
}

/*
* North Plant function and coordinates
*/
var up_barr = [up4, up2, up3, up1, up5, up2, up2, up3, up4, up1];
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
var down_barr = [down1, down2, down3, down4, down5, grass, root, leave, grass, down2];
//random pick a barrier from barr array
var down_plant = down_barr[Math.floor(Math.random() * 10)];
var down_pos = [];
down_pos[0] = {
    x : cvs.width - 160
};

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
        //test draw plants
        constant = up_plant.height + gap;
        sf.drawImage(
            up_plant, plant[i].x, plant[i].y
            );
        sf.drawImage(
            down_plant, plant[i].x, plant[i].y + constant
            );
        plant[i].x--;
        if (plant[i].x == 150){
            // console.log(up2.height, up2.width); //170-52
            // console.log(down2.height, down2.width);  //184-173
            // console.log(down_plant.height, down_plant.width) //184-
            console.log(down_plant.height )
            plant.push(
                {
                    x : cvs.width,
                    y : Math.floor(Math.random()*up_plant.height) - up_plant.height
                }
            );
        }
   
        // if(up_pos[i].x == 190){
        //     //push new plant with random function
        //     up_pos.push({
        //         x : cvs.width, 
        //         //- Math.floor(Math.random() *  10),
        //         y : Math.floor(Math.random() * 100) - Math.floor(Math.random() * 50)
        //     });
        // }
        // if(down_pos[i].x == 200){
        //     down_barr.push({
        //         x : Math.floor(Math.random() * 600),
        //         y : Math.floor(Math.random() * 200) + Math.floor(Math.random() * 50)
        //     });
        // }

        /*
        * Game over rule
        */
       
        //hit the plant
        if (CX + creature.width >= plant[i].x 
            && CX <= plant[i].x + up_plant.width
            && (CY <= plant[i].y + up_plant.height || CY + creature.height >= cvs.height - plant[i].y)
            ){
                
                location.reload();
        }

        // if (CX + creature.width >= plant[i].x 
        //     && CX < plant[i].x + down_plant.width 
        //     && CY + creature.height >= down_plant.height){
        //         console.log("touch the downplant at", down_plant.x, down_plant.y);
        //     location.reload();
        // }
        
        //touch the ground
        if(CY + creature.height > cvs.height - 8 ){
            location.reload();
        }
        
        /*
        * record the score
        */
        if(plant[i].x == 10){
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
    requestAnimationFrame(draw);
    
}

draw();



