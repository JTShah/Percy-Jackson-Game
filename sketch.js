//variables
var bg_img;
var chiron, chiron_img;
var box1, box2, box3, box4, box_img; 
var question, ques_bubble;
var hint;
var rounds = 1;
var timer = 200;
var riptide, riptide_img;
var op1, op2, op3, op4;
var score = 0;
var gameover1, gameover2;

//the Big 3
function preload() {
    bg_img=loadImage("1.jpg");
    chiron_img = loadImage("chiron.png");
    box_img = loadImage("Box.png");
    ques_bubble = loadImage("bubble.png");
    riptide_img = loadImage("riptide.png");
    gameover1 = loadImage("win.png");
    gameover2 = loadImage("lose.png");

}

function setup() {
    createCanvas(1500, 800);

    chiron = createSprite(1370, 700);
    chiron.addImage(chiron_img);
    chiron.scale = 0.6;

    riptide = createSprite(500, 200);
    riptide.addImage(riptide_img);
    riptide.scale = 0.5;

    op1 = createSprite(200, 320, 300,50);
    op1.visible = false;
    op3 = createSprite(200, 620, 300,50);
    op3.visible = false;
    op2 = createSprite(600, 320, 300,50);
    op2.visible = false;
    op4 = createSprite(600, 620, 300,50);
    op4.visible = false;






}

function draw() {
    background("#008227");
    image(bg_img, 0, 0, 1500, 800);

    riptide.x = World.mouseX;
    riptide.y = World.mouseY;

    askQuestion();
    setOptions();
    image(box_img, 0, 50, 1300, 100);
    if(timer > 0) {
        timer = timer-1;
        console.log("timer: " + timer);

        textSize(50);
        textFont("calibri");
        fill("#c41b24");
        text("You have " + timer + " seconds left",40,115);
        fill("#fc0d99")
        text("Your Score: " + score ,1000,115);
    }

    
    checkAnswer();
    drawSprites();
    
}

//lesser Functions...

function askQuestion() {
    fill("green")
    textSize(35);
    textFont("Calibri");
    image(ques_bubble, 950, 200);
    text("Guess the character:", 1080, 330);

    if(timer == 0){
        rounds = rounds +1 ;
        console.log("rounds be updated" + rounds);
        timer = 200;
        if(rounds > 5 || rounds == 6 || score == 5) {
            //console.log("game be over mate...")
            timer = 0;
            gameOver();
        }
    }

    if(rounds === 1){ 
        fill("purple")
        textSize(34);
        text("This Character can fly", 1070, 370);

    
    }
    else if(rounds === 2){ 
        fill("purple")
        textSize(34);
        text("This character is a Praetor", 1100, 340, 350, 80);
     
        
    }
    else if(rounds === 3){ 
        fill("purple")
        textSize(34);
        text("This character is related to water", 1050, 340, 350, 80);

    }
    else if(rounds === 4){ 
        fill("purple")
        textSize(34);
        text("This character turned down Immortality", 1100, 340, 350, 80);

    }
    else if(rounds === 5){ 
        fill("purple")
        textSize(34);
        text("This character is Bi", 1100, 340, 350, 80);

    }
}

function setOptions() {
    if(rounds === 1){
       
        textSize(54);
        textFont("calibri");
        image(box_img, 50, 200, 300, 250);
        fill("#810fab")
        text("Jason", 140, 300, 250, 80);
        
        image(box_img, 450, 200, 300, 250);
        text("Percy", 540, 300, 350, 80);

        image(box_img, 450, 500, 300, 250);
        text("Leo", 550, 600, 350, 80);

        image(box_img, 50, 500, 300, 250);
        text("Will", 145, 600, 350, 80);
       
    }
    else if(rounds === 2){ 
       
        textSize(54);
        textFont("calibri");
        image(box_img, 50, 200, 300, 250);
        fill("#810fab")
        text("Leo", 140, 300, 250, 80);
        
        image(box_img, 450, 200, 300, 250);
        text("Octavian", 540, 300, 350, 80);

        image(box_img, 450, 500, 300, 250);
        text("Dakota", 550, 600, 350, 80);

        image(box_img, 50, 500, 300, 250);
        text("Frank", 145, 600, 350, 80);
       
       
    }
    else if(rounds === 3){ 
       
        textSize(54);
        textFont("calibri");
        image(box_img, 50, 200, 300, 250);
        fill("#810fab")
        text("Frank", 140, 300, 250, 80);
        
        image(box_img, 450, 200, 300, 250);
        text("Leo", 540, 300, 350, 80);

        image(box_img, 450, 500, 300, 250);
        text("Percy", 550, 600, 350, 80);

        image(box_img, 50, 500, 300, 250);
        text("Annabeth", 145, 600, 350, 80);
       
    }
    else if(rounds === 4){ 
               
        textSize(54);
        textFont("calibri");
        image(box_img, 50, 200, 300, 250);
        fill("#810fab")
        text("Thalia", 140, 300, 250, 80);
        
        image(box_img, 450, 200, 300, 250);
        text("Percy", 540, 300, 350, 80);

        image(box_img, 450, 500, 300, 250);
        text("Piper", 550, 600, 350, 80);

        image(box_img, 50, 500, 300, 250);
        text("Frank", 145, 600, 350, 80);
       
    }
    else if(rounds === 5){ 
               
        textSize(54);
        textFont("calibri");
        image(box_img, 50, 200, 300, 250);
        fill("#810fab")
        text("Annabeth", 100, 300, 250, 80);
        
        image(box_img, 450, 200, 300, 250);
        text("Hazel", 540, 300, 350, 80);

        image(box_img, 450, 500, 300, 250);
        text("Nico", 550, 600, 350, 80);

        image(box_img, 50, 500, 300, 250);
        text("Will", 145, 600, 350, 80);
       
    }
}

function checkAnswer() {
    if(rounds === 1) {
        if(riptide.collide(op1)) {
            console.log("correctamente");
            score = score +1;
            rounds = rounds +1;
            timer = 200;

        }
        else if(riptide.collide(op2) || riptide.collide(op3) || riptide.collide(op4)) {
            console.log("wrong");
        }
    }

    if(rounds === 2) {
        if(riptide.collide(op3)) {
            console.log("correctamente");
            score = score+1
            rounds = rounds +1;
            timer = 200;
        }
        else if(riptide.collide(op1) || riptide.collide(op2) || riptide.collide(op4)) {
            console.log("wrong");
        }
    }

    if(rounds === 3) {
        if(riptide.collide(op4)) {
            console.log("correctamente");
            score = score+1
            rounds = rounds +1;
            timer = 200;
        }
        else if(riptide.collide(op1) || riptide.collide(op2) || riptide.collide(op3)) {
            console.log("wrong");
        }
    }

    if(rounds === 4) {
        if(riptide.collide(op2)) {
            console.log("correctamente");
            score = score+1
            rounds = rounds +1;
            timer = 200;
        }
        else if(riptide.collide(op1) || riptide.collide(op4) || riptide.collide(op3)) {
            console.log("wrong");
        }
    }

    if(rounds === 5) {
        if(riptide.collide(op3)) {
            console.log("correctamente");
            score = score+1
            rounds = rounds +1;
            timer = 200;
        }
        else if(riptide.collide(op1) || riptide.collide(op4) || riptide.collide(op2)) {
            console.log("wrong");
        }
    }

    




}

function gameOver() {
    if(score > 3 || score == 3) {
        var win = createSprite(750, 400);
        win.addImage(gameover1);
        win.scale = 0.3;
    }

    if(score < 3) {
        var lose = createSprite(750, 400);
        lose.addImage(gameover2);
        lose.scale = 0.3;
    }
}







