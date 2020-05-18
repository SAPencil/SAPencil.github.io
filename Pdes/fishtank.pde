size(400,400);
frameRate = 5;

var x=0;

var fish = function(centerX,centerY,facing,R,G,B,size, speed){

var bodyLength = size*1.18;
var bodyHeight = size*0.74;
var bodyColor = color(R, G, B);
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;

noStroke();
fill(bodyColor);
ellipse(centerX, centerY, bodyLength, bodyHeight);// body

triangle(centerX+facing*bodyLength/2, centerY,
         centerX+facing*bodyLength/2+facing*tailWidth/2+facing*Math.sin(x*10/size)*0.5*tailWidth, centerY-tailHeight,
         centerX+facing*bodyLength/2+0.5*facing*tailWidth+facing*Math.sin(x*10/size)*0.5*tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX-facing*bodyLength/4, centerY, bodyHeight/5,bodyHeight/5);
};

var savedX = 0;
var savedY = 0;
 
draw = function() {
   background(89, 216, 255);
    fish((200+2*x)%600-100,100,-1,249,142,49,100);
    fish((300+0.7*x)%400,200,-1,85,51,361,14);
    fish((100-1.5*x)%600-100,250,1,249,142,49,50);
    fish((200-0.5*x)%600-100,300,1,309,193,93,70);
    fish((40+x)%600-100,50,-1,237,300,300,30);
    fish((100+3*x)%600-100,270,-1,285,174,30,100);
    fish((200+2*x)%600-100,190,-1,30,46,199,10);
    fish((x)%600-100,380,-1,250,0,0,40);
    if (savedX !== 0 || savedY !== 0) {
    fish((2*savedX)%600-100,savedY,-1,0,46,199,100);
    }    
    mouseClicked = function() {
    savedX = mouseX;
    savedY = mouseY;
    };
    x ++;
    savedX ++;
};



