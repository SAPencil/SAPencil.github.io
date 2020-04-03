
frameRate(50);
size(400,400);
background(240,240,240);
//This program visualises the harmonic ratio of m:n, in the same way that a mechanical harmonograph does using two lateral pendulums. Consonant ratios like the perfect 5th (3:2) will produce simple patterns. Increasingly dissonant ratios will produce increasingly complicated patterns.

    var decay = 0.00005;//0.00005 gives a pleasing amount of decay of the swing of the pendulum. I'm not sure how 'natural' this decay is.
    var refreshRate = 0.01;//to speed up the drawing, increase this variable, although large values will reveal jagged edges to the curves.
    var releaseDelay =0;//Different patterns can be observed if the second pendulum is released after the first (or in this program, started at a different point in its swing). Enter the number (or fraction) of swings of the first pendulum you would like to pass before releasing the second.

    translate(width/2, height/2);
    scale(1, -1);  

    strokeWeight(0.5);
    var t = 0;
    var amp=width/2-10;
    var m = 1;
    var n = 1.01;

    function pencil (xPath, yPath) {
        this.xPos = xPath;
        this.yPos = yPath;
        this.oldXPos = xPath;
        this.oldYPos = yPath; 
    };

    pencil.prototype.update = function(newX,newY) {
        this.oldXPos = this.xPos;
        this.oldYPos = this.yPos;
        this.xPos = newX;
        this.yPos = newY;
    };

    var pencil = new pencil(amp*(Math.sin(m*(t-releaseDelay*Math.PI))),amp*(Math.sin(n*t))); 

    draw = function() {
    
        if (clear === true ) {
        
        m = mTemp;
        n = nTemp;
        pencil.oldXPos = 0;
        pencil.oldYPos = 0;
        t = 0; 
        rect(-width/2,-width/2,width,width);
        amp = width/2-10;
        
        }
       
        fill(255,255,255);
        stroke(255,255,255);
        //Track for pendulums
        rect(-width/2,width/2-5,width,5);
        rect(width/2-5,-width/2,5,height);
        rect(0,width-10,10,width);

        //Update and draw new line
        if (clear === true ) {
            pencil.oldXPos = 0;
            pencil.oldYPos = 0;
            pencil.xPos = 0;
            pencil.yPos = 0;
            clear = false;
        } else {
        pencil.update(amp*(Math.sin(m*(t-releaseDelay*Math.PI))),amp*(Math.sin(n*t)));
        }
        stroke(pencil.xPos%255, pencil.yPos%255, t%255);
        line(pencil.oldXPos,pencil.oldYPos,pencil.xPos,pencil.yPos);
        fill(0,0,0);
        ellipse(pencil.xPos,width/2,5,5);
        ellipse(width/2,pencil.yPos,5,5);
        amp *= (1-decay);
        t += refreshRate;
     
        
        fill(240,240,240);
        stroke(255,255,255);
     
        

    }
