
    // The ants in this colony just want to folow the leader
frameRate(100);
size(400,400);
background(240,240,240);

    // The ants in this colony just want to folow the leader


var Ant = function() {
    this.actPosition = new PVector (random(0,width), random(0, height)); 
    this.position = this.actPosition;
    this.velocity = new PVector (0,0);
    this.acceleration = new PVector (0,0);
};

var LeaderAnt = function() {
    this.actPosition = new PVector (random(0,width), random(0, height)); 
    this.position = this.actPosition;
    this.velocity = new PVector (0,0);
    this.acceleration = new PVector (0,0);
};

LeaderAnt.prototype.update = function() {
    
    //Directing the leader with arrow keys
    if (up /*keyPressed && keyCode === 38*/) { // if up, tend to move up
    this.acceleration.x = random(-0.5,0.5);
    this.acceleration.y = random (-0.55,0.45);

    
    } else if (down) { // if down tend down
    this.acceleration.x = random(-0.5,0.5);
    this.acceleration.y = random (-0.45,0.55);
    
    } else if (left) { // if left tend left
    this.acceleration.x = random(-0.55,0.45);
    this.acceleration.y = random (-0.5,0.5);
    
    } else if (right) { // if right tend right
    this.acceleration.x = random(-0.45,0.55);
    this.acceleration.y = random (-0.5,0.5);
    
    } else { // if not, random.
    this.acceleration.x = random(-0.5,0.5);
    this.acceleration.y = random (-0.5,0.5);}
    
    //Make acceleration affect position
    this.velocity.add(this.acceleration);
    this.velocity.limit(1);
    this.actPosition.add(this.velocity);
    
     
    //Now wrap arround the screen, but without changing the 'actual position' variable when the ant goes off screen
    
    //for x
    if (this.actPosition.x < 0) {this.position.x = (floor(abs(this.actPosition.x)/width)+1)*width+this.actPosition.x;}
    else {this.position.x = this.actPosition.x%width;}
    
    //for y
    if (this.actPosition.y < 0) {this.position.y = (floor(abs(this.actPosition.x)/height)+1)*width+this.actPosition.y;}
    else {this.position.y = this.actPosition.y%width;}
};
    
Ant.prototype.display = function(s) {
   stroke(0, 0, 0);
    fill(0, 0, 0);
    ellipse(this.position.x, this.position.y, 3, 5);
    ellipse(this.position.x, this.position.y-5,3,4);
    line(this.position.x,this.position.y, this       .position.x+4, this.position.y+2);
    line(this.position.x+4, this.position.y+2        ,this.position.x+4, this.position.y+4);
    line(this.position.x,this.position.y, this       .position.x+4,this.position.y);
    line(this.position.x,this.position.y, this       .position.x+4, this.position.y-2);
    line(this.position.x+4, this.position.y-2        ,this.position.x+4, this.position.y-4);
    
    line(this.position.x,this.position.y, this       .position.x-4, this.position.y+2);
    line(this.position.x-4, this.position.y+2        ,this.position.x-4, this.position.y+4);
    line(this.position.x,this.position.y, this       .position.x-4,this.position.y);
    line(this.position.x,this.position.y, this       .position.x-4, this.position.y-2);
    line(this.position.x-4, this.position.y-2        ,this.position.x-4, this.position.y-4);


};

LeaderAnt.prototype.display = function(s) {
    fill(250, 10, 10);
    ellipse(this.position.x, this.position.y, 6, 10);
    ellipse(this.position.x, this.position.y-5,6,8);
    stroke(0, 0, 0);
    line(this.position.x,this.position.y,this.position.x+8,this.position.y+4);
    line(this.position.x+8,this.position.y+4,this.position.x+8,this.position.y+8);
    line(this.position.x,this.position.y,this.position.x+8,this.position.y);
    line(this.position.x,this.position.y,this.position.x+8, this.position.y-4);
    line(this.position.x+8, this.position.y-4,this.position.x+8, this.position.y-8);
    
    line(this.position.x,this.position.y, this.position.x-8, this.position.y+4);
    line(this.position.x-8, this.position.y+4,this.position.x-8, this.position.y+8);
    line(this.position.x,this.position.y, this.position.x-8,this.position.y);
    line(this.position.x,this.position.y, this.position.x-8, this.position.y-4);
    line(this.position.x-8, this.position.y-4,this.position.x-8, this.position.y-8);
};

var leader = new LeaderAnt();

Ant.prototype.update = function() {
    this.toLeader = PVector.sub(leader.actPosition,this.actPosition);
    this.toLeader.normalize();
    this.acceleration.x = 0.05*this.toLeader.x + random(-0.5, 0.5);
    this.acceleration.y = 0.05*this.toLeader.y + random(-0.5, 0.5);
    this.velocity.add(this.acceleration);
    this.velocity.limit(1);
    this.actPosition.add(this.velocity);
    
    if (this.position.x > 0) {
    this.position.x = this.actPosition.x%400;
    } else {
        this.position.x = -this.actPosition.x%400;}
    
    if (this.position.y > 0) {
    this.position.y = this.actPosition.y%400;
    } else {
        this.position.y = this.actPosition.y%400;}
};
    
//how many ants would you like?


var ants = [];

for (var i = 0; i < numberOfAnts; i++) {
    ants[i] = new Ant(); 
}



draw = function() {
    background(255, 255, 255);

    if (left) {
            fill(255,0,0)
    rect(0,0,5,width);
    console.log("left")
    }

    if (right) {
            fill(255,0,0)
    rect(width-5,0,5,width);
    }

    if (up) {
            fill(255,0,0)
    rect(0,0,width,5);
    }

    if (down) {
            fill(255,0,0)
    rect(0,width-5,width,5);
    }

    if (clear) {
        ants = [];
        for (var i = 0; i < numberOfAnts; i++) {
            ants[i] = new Ant(); 
        }
    }
   
    for (i = 0; i < ants.length; i++){
        ants[i].display();
        ants[i].update();
    }
    leader.display();
    leader.update();

    if (clear === true ) {
        fill(250,250,250);
        rect(0,0,width,width);

        clear = false;

    }

};


