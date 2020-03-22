/*
This project uses a random number generator to create rain drops and a separate random number to decide whether lightnight will strike. At the moment no lightning bolts appear. Maybe someone would like to add this?
*/

var xPositions = [];
var yPositions = [];
var m = 93;//To increase the chance of lightning, decrease this variable.

draw = function() {
    background(187, 224, 230);
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 10;
        xPositions[i] -= 7.1;
        }
    fill(201, 183, 183);
    //cloud
    ellipse(240, 28, 166, 127);
    ellipse(158, 37, 95, 77);
    ellipse(326, 33, 95, 77);
    //cloud
    ellipse(419, 28, 166, 127);
    ellipse(103, 37, 95, 77);
    ellipse(48, 33, 128, 125);
    
    //lightning
   
    var lightChance = random(0,m);
    if(lightChance < 1) {
        background(201, 197, 201);
        fill(255, 255, 255);
    //clouds
    ellipse(240, 28, 166, 127);
    ellipse(158, 37, 95, 77);
    ellipse(326, 33, 95, 77);
    ellipse(419, 28, 166, 127);
    ellipse(103, 37, 95, 77);
    ellipse(48, 33, 128, 125);
    
    }
    yPositions.push (0);
    xPositions.push (random(0, 600));
};
