
frameRate(1000);
size(400,400);
//This program visualises the harmonic ratio of m:n, in the same way that a mechanical harmonograph does using two lateral pendulums. Consonant ratios like the perfect 5th (3:2) will produce simple patterns. Increasingly dissonant ratios will produce increasingly complicated patterns.

var m = 1;
var n = 1.01;

var decay = 0.9995;//0.99995 gives a pleasing amount of decay of the swing of the pendulum. I'm not sure how 'natural' this decay is.

var refreshRate = 0.1;//to speed up the drawing, increase this variable, although large values will reveal jagged edges to the curves.

var releaseDelay =0.5;//Different patterns can be observed if the second pendulum is released after the first (or in this program, started at a different point in its swing). Enter the number (or fraction) of swings of the first pendulum you would like to pass before releasing the second.




translate(width/2, height/2);
scale(1, -1);  
strokeWeight(0.5);
var t = 100;
var amp=width/2-5;
var pencil = function() {
    this.xpos = amp*Math.sin(m*(t-releaseDelay*Math.PI));
    this.ypos = amp*Math.sin(n*t);
    this.oldxPos = amp*Math.sin(m*(t-releaseDelay*Math.PI));
    this.oldypos = amp*Math.sin(n*t); 
};

pencil.prototype.update = function(newX,newY) {
    this.oldxpos = this.xpos;
    this.oldypos = this.ypos;
    this.xpos = newX;
    this.ypos = newY;
};

var pencil = new pencil();


var clear =  false;
draw = function() {
    if (clear === true) {
    fill(255, 255, 255);
    rect(-width/2, -height/2, width, height);    
    }
    fill(255,255,255);
    stroke(255,255,255);
    rect(-width/2,width/2-5,width,5);
    rect(width/2-5,-width/2,5,height);
    rect(0,width-10,10,width);
    pencil.update(amp*Math.sin(m*(t-releaseDelay*Math.PI)),amp*Math.sin(n*t));
    stroke(pencil.xpos%255, pencil.ypos%255, t%255);
    line(pencil.oldxpos,pencil.oldypos,pencil.xpos,pencil.ypos);
    fill(0,0,0);
    ellipse(pencil.xpos,width/2,5,5);
    ellipse(width/2,pencil.ypos,5,5);
    amp *= decay;
    t += refreshRate;
    
    

};
