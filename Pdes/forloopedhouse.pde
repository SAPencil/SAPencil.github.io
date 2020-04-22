frameRate(500);
size(400,400);

background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);//roof


//bricks
var brickLength =30;
var brickHeight = 7;

for (var y = 0; y < 209; y = y + brickHeight){
    for (var x = 0; x < 257; x = x + brickLength){
            var startXBrick;
            startXBrick = 60;
            if (y % 2 === 0) {startXBrick = startXBrick + 0.5                *brickLength;}
            stroke(189, 185, 189);
            strokeWeight(1);
            fill(179, 81, 81);
            rect(startXBrick+x, y+150,brickLength, brickHeight);
            
    }
}
for (var y = 0; y < 209; y = y + brickHeight){
            var startXBrick;
            startXBrick = 60;
            if (y % 2 === 0) {
            stroke(189, 185, 189);
            strokeWeight(1);
            fill(179, 81, 81);
            rect(startXBrick, y+150,0.5*brickLength, brickHeight);
            }
    }
for (var y = 0; y < 209; y = y + brickHeight){
            var startXBrick;
            startXBrick = 60;
            if (y % 2 === 1) {
            stroke(189, 185, 189);
            strokeWeight(1);
            fill(179, 81, 81);
            rect(329, y+150,0.5*brickLength, brickHeight);
            }
    }
//end of bricks

fill(120, 80, 19);
rect(178, 284, 40, 77);//door

fill(0, 0, 0);
ellipse (190, 320, 7, 7);//doorhandle

//windows
var window = function (x, y, wS) {

    fill(255, 255, 255);
    stroke(120, 80, 19);
    strokeWeight(3);
    rect(x , y, wS, wS);
    rect(x+wS, y, wS, wS);
    rect(x, y+wS, wS, wS);
    rect(x+wS, y+wS, wS, wS);
};
for (var y = 0; y < 174; y = y + 89){
for (var x = 0; x < 174; x = x +161){
   window(x + 95, y + 173, 26);
}
}
var x = 0;
var y = 400;

//grass
for (y = 374; y < 404; y = y + 14){
for (x = 0; x < 400; x = x + 5) {
var m = random(0, 10);
noStroke();
fill(80, 150, 45);

triangle(x, y, x+3, y, x + m, y - 15);
}
}

