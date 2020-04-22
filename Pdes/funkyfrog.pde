frameRate(10);
size(400,400);
background(255,255,255);


var x = width/2;
var y = height/2;
var m = 0;

draw = function() {
    background(0, 225, 255);
    noStroke();
    fill(30, 204, 91); // a nice froggy green!
    
    ellipse(x, y, 200, 100); // face
    ellipse(x - 50, y - 50, 40, 40); // left eye socket
    ellipse(x + 50, y - 50, 40, 40); // right eye socket
    
    
    
    fill(255, 255, 255); // for the whites of the eyes!
    ellipse(x - 50, y - 50, 30, 30); // left eyeball
    ellipse(x + 50, y - 50, 30, 30); // right eyeball
    fill(0,0,0);
    ellipse(x - 50, y - 50, 5, 5); // left pupil
    ellipse(x + 50, y - 50, 5, 5); // right pupil
    


    fill(0,0,0);
    ellipse(x,y,100,90*Math.sin(m));
    fill(255, 255, 255);
    stroke(0,0,0);
    rect(x,y-abs(45*Math.sin(m)),15,20);
    rect(x-15,y-abs(45*Math.sin(m)),15,20);
    
    
    m = m+0.5;
};
