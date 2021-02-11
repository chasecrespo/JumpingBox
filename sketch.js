var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = ("blue");

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = ("orange");

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = ("purple");

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = ("green");

    ball = createSprite(random(20,700),100, 40,40);
    ball.shapeColor = ("black");
    ball.velocityX = 10;
    ball.velocityY = 10;

}

function draw() {
    background("gray");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(ball.bounceOff(block1)){
        ball.shapeColor = ("blue");
       music.play();
    }

    if(ball.bounceOff(block2)){
        ball.shapeColor = ("orange");
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(ball.bounceOff(block3)){
        ball.shapeColor = ("purple");
        
    }

    if(ball.bounceOff(block4)){
        ball.shapeColor = ("green");
        
    }

    drawSprites();
}
